import { UrlMaker } from "../lib/utils";


const FORM_HEADERS: HeadersInit = {
  Accept: 'application/json',
};

export const postMessageInChat = async (formData: FormData) => {
  try {
    const res = await fetch(UrlMaker("chat/"), {
      method: "POST",
      headers: FORM_HEADERS,
      body: formData,
    });

    const body = await res.json();

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        body,
      };
    }

    return {
      ok: true,
      status: res.status,
      body,
    };
  } catch (e) {
    return {
      ok: false,
      status: 500,
      body: {
        message: "مشکلی پیش آمده لطفا بعدا مجدد تلاش کنید.",
        errors: e instanceof Error ? e.message : "Unknown error",
      },
    };
  }
};


// First API call with reasoning
export const postMessageToOpenRouter = async (message: string, modelName: string) => {
  const URL = "https://openrouter.ai/api/v1/chat/completions"
  const api_key = process.env.OPENROUTER_API_KEY
  let model
  switch (modelName) {
    case 'Nemotron-3':
      model = 'nvidia/nemotron-3-ultra-550b-a55b:free'
      break
    case 'Space-Bunny':
      model = 'stealth/space-bunny-alpha'
      break
    case 'Ling-3':
      model = 'inclusionai/ling-3.0-flash-fin:free'
      break
    case 'Laguna':
      model = 'poolside/laguna-s-2.1:free'
      break
    case 'Dots3':
      model = 'dots-studio/dots-3-note-preview:free'
      break
    case 'Inkling':
      model = 'thinkingmachines/inkling:free'
      break
    default:
      throw new Error('Unknown model')
  }

  const headers = {
    Authorization: `Bearer ${api_key}`,
    "Content-Type": "application/json",
  }
console.log('URL :>> ', URL ,'headers :>> ', headers ,'model :>> ', model ,'message :>> ', message);

  const response = await fetch(URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      reasoning: {
        enabled: true,
      },
    }),
  })

  if (!response.ok) {
    throw new Error(
      `OpenRouter error: ${response.status} ${await response.text()}`
    )
  }

  const data = await response.json()

  return data.choices[0].message.content

}

// Extract the assistant message with reasoning_details and save it to the response variable



// Second API call - model continues reasoning from where it left off
