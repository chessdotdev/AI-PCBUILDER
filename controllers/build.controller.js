import { OpenAI } from "openai";
import 'dotenv/config';
const client = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: process.env.HF_API_KEY,
});


const generateBuild = async (req, res) => {
    try {
        const { budget = "₱50000", purpose =  "Gaming and Streaming", brand = "AMD"} = req.body;
const prompt = 
`
    Generate a compatible PC build for these requirements:
    - Budget: ${budget}
    - Currency: PHP - Peso
    - Purpose: ${purpose}
    - Brand Preference: ${brand}
    
      Please provide the names of compatible parts (CPU, GPU, RAM, etc.), and ensure each part name is on a separate line. 
      Do not include numbers or extra text, just list the names of the parts one per line, like this:
  
      Intel Core i9-11900K
      NVIDIA GeForce RTX 3070
      Corsair Vengeance LPX 16GB
      ASUS TUF Gaming B550M
      Samsung 970 EVO Plus 1TB SSD
      EVGA SuperNOVA 750 G5 PSU
      NZXT H510 Mid Tower Case
  
      Ensure that the parts are compatible with each other and the total cost is within the budget.
      List the following parts:
      1. CPU
      2. GPU
      3. RAM
      4. Motherboard
      5. Storage (HDD/SSD)
      6. PSU (Power Supply Unit)
      7. Case
`
const chatCompletion = await client.chat.completions.create({
     model: 'openai/gpt-oss-safeguard-20b:groq',
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
});

console.log(chatCompletion.choices[0].message);
const message = chatCompletion.choices[0].message
return res.status(200).json({build: message});
    } catch (error) {
        console.error(error); // debugging error
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default generateBuild;