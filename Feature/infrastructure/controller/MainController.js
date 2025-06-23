"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = mainController;
{ /**Main Controller of the app */ }
const ProfessionalResponse_1 = require("../../core/usecases/ProfessionalResponse");
function mainController(text, type) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hi");
        //read and redirect as required
        if (type === 'genz') {
            //TODO implement the genz call
        }
        else {
            yield (0, ProfessionalResponse_1.professionalUsecase)(text);
            //TODO implement the professional call
        }
    });
}
