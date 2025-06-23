import { openAI } from "../../infrastructure/services/openai";

{/**Professional Response */}
 

const PROMPT:string= "Please rewrite the following text in a professional, polished tone suitable for workplace communication. Keep the original meaning intact, and correct any grammar or clarity issues as needed:"

export async function professionalUsecase(text:string){
const res = await openAI(PROMPT, text);
console.log(res);

}