const baseUrl = "http://localhost:8001";

export const userMsg = async (question: string) => {
  try {
    const response = await fetch(`${baseUrl}/chat`, {
      method: "POST",
      body: JSON.stringify({ question }),
    });

    return response.json();
  } catch (e) {
    console.error(e);
  }
};
