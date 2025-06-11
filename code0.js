gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTituloObjects1= [];
gdjs.MenuCode.GDTituloObjects2= [];
gdjs.MenuCode.GDJogarObjects1= [];
gdjs.MenuCode.GDJogarObjects2= [];
gdjs.MenuCode.GDCreditosObjects1= [];
gdjs.MenuCode.GDCreditosObjects2= [];
gdjs.MenuCode.GDVezesObjects1= [];
gdjs.MenuCode.GDVezesObjects2= [];
gdjs.MenuCode.GDTransicaoObjects1= [];
gdjs.MenuCode.GDTransicaoObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.MenuCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDJogarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDJogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDJogarObjects1[k] = gdjs.MenuCode.GDJogarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDJogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instruções", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Creditos"), gdjs.MenuCode.GDCreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCreditosObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCreditosObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCreditosObjects1[k] = gdjs.MenuCode.GDCreditosObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCreditosObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Créditos", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTituloObjects1.length = 0;
gdjs.MenuCode.GDTituloObjects2.length = 0;
gdjs.MenuCode.GDJogarObjects1.length = 0;
gdjs.MenuCode.GDJogarObjects2.length = 0;
gdjs.MenuCode.GDCreditosObjects1.length = 0;
gdjs.MenuCode.GDCreditosObjects2.length = 0;
gdjs.MenuCode.GDVezesObjects1.length = 0;
gdjs.MenuCode.GDVezesObjects2.length = 0;
gdjs.MenuCode.GDTransicaoObjects1.length = 0;
gdjs.MenuCode.GDTransicaoObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDTituloObjects1.length = 0;
gdjs.MenuCode.GDTituloObjects2.length = 0;
gdjs.MenuCode.GDJogarObjects1.length = 0;
gdjs.MenuCode.GDJogarObjects2.length = 0;
gdjs.MenuCode.GDCreditosObjects1.length = 0;
gdjs.MenuCode.GDCreditosObjects2.length = 0;
gdjs.MenuCode.GDVezesObjects1.length = 0;
gdjs.MenuCode.GDVezesObjects2.length = 0;
gdjs.MenuCode.GDTransicaoObjects1.length = 0;
gdjs.MenuCode.GDTransicaoObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
