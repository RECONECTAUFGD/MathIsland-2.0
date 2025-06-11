gdjs.FimCode = {};
gdjs.FimCode.localVariables = [];
gdjs.FimCode.GDTituloObjects1= [];
gdjs.FimCode.GDTituloObjects2= [];
gdjs.FimCode.GDJogarObjects1= [];
gdjs.FimCode.GDJogarObjects2= [];
gdjs.FimCode.GDCreditosObjects1= [];
gdjs.FimCode.GDCreditosObjects2= [];
gdjs.FimCode.GDVezesObjects1= [];
gdjs.FimCode.GDVezesObjects2= [];
gdjs.FimCode.GDFimObjects1= [];
gdjs.FimCode.GDFimObjects2= [];
gdjs.FimCode.GDTransicaoObjects1= [];
gdjs.FimCode.GDTransicaoObjects2= [];


gdjs.FimCode.asyncCallback24910516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FimCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs.FimCode.localVariables.length = 0;
}
gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FimCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.FimCode.asyncCallback24910516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24904692);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDTituloObjects1.length = 0;
gdjs.FimCode.GDTituloObjects2.length = 0;
gdjs.FimCode.GDJogarObjects1.length = 0;
gdjs.FimCode.GDJogarObjects2.length = 0;
gdjs.FimCode.GDCreditosObjects1.length = 0;
gdjs.FimCode.GDCreditosObjects2.length = 0;
gdjs.FimCode.GDVezesObjects1.length = 0;
gdjs.FimCode.GDVezesObjects2.length = 0;
gdjs.FimCode.GDFimObjects1.length = 0;
gdjs.FimCode.GDFimObjects2.length = 0;
gdjs.FimCode.GDTransicaoObjects1.length = 0;
gdjs.FimCode.GDTransicaoObjects2.length = 0;

gdjs.FimCode.eventsList1(runtimeScene);
gdjs.FimCode.GDTituloObjects1.length = 0;
gdjs.FimCode.GDTituloObjects2.length = 0;
gdjs.FimCode.GDJogarObjects1.length = 0;
gdjs.FimCode.GDJogarObjects2.length = 0;
gdjs.FimCode.GDCreditosObjects1.length = 0;
gdjs.FimCode.GDCreditosObjects2.length = 0;
gdjs.FimCode.GDVezesObjects1.length = 0;
gdjs.FimCode.GDVezesObjects2.length = 0;
gdjs.FimCode.GDFimObjects1.length = 0;
gdjs.FimCode.GDFimObjects2.length = 0;
gdjs.FimCode.GDTransicaoObjects1.length = 0;
gdjs.FimCode.GDTransicaoObjects2.length = 0;


return;

}

gdjs['FimCode'] = gdjs.FimCode;
