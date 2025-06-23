{/**Main Controller of the app */}
import { professionalUsecase } from "../../core/usecases/ProfessionalResponse"
export async function mainController(text: string, type: string) {
    console.log("hi")
    //read and redirect as required
    if(type === 'genz'){
        //TODO implement the genz call
    }
    else{
        await professionalUsecase(text);
        
        //TODO implement the professional call
    }

}