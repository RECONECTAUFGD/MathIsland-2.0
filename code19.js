gdjs.Cr_233ditosCode = {};
gdjs.Cr_233ditosCode.localVariables = [];
gdjs.Cr_233ditosCode.GDCreditosObjects1= [];
gdjs.Cr_233ditosCode.GDCreditosObjects2= [];
gdjs.Cr_233ditosCode.GDJogarObjects1= [];
gdjs.Cr_233ditosCode.GDJogarObjects2= [];
gdjs.Cr_233ditosCode.GDVoltarObjects1= [];
gdjs.Cr_233ditosCode.GDVoltarObjects2= [];
gdjs.Cr_233ditosCode.GDVezesObjects1= [];
gdjs.Cr_233ditosCode.GDVezesObjects2= [];
gdjs.Cr_233ditosCode.GDAgradecimentoObjects1= [];
gdjs.Cr_233ditosCode.GDAgradecimentoObjects2= [];
gdjs.Cr_233ditosCode.GDUFGDObjects1= [];
gdjs.Cr_233ditosCode.GDUFGDObjects2= [];
gdjs.Cr_233ditosCode.GDReconectaObjects1= [];
gdjs.Cr_233ditosCode.GDReconectaObjects2= [];
gdjs.Cr_233ditosCode.GDTransicaoObjects1= [];
gdjs.Cr_233ditosCode.GDTransicaoObjects2= [];


gdjs.Cr_233ditosCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Cr_233ditosCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cr_233ditosCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.Cr_233ditosCode.GDVoltarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cr_233ditosCode.GDVoltarObjects1[k] = gdjs.Cr_233ditosCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.Cr_233ditosCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Cr_233ditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cr_233ditosCode.GDCreditosObjects1.length = 0;
gdjs.Cr_233ditosCode.GDCreditosObjects2.length = 0;
gdjs.Cr_233ditosCode.GDJogarObjects1.length = 0;
gdjs.Cr_233ditosCode.GDJogarObjects2.length = 0;
gdjs.Cr_233ditosCode.GDVoltarObjects1.length = 0;
gdjs.Cr_233ditosCode.GDVoltarObjects2.length = 0;
gdjs.Cr_233ditosCode.GDVezesObjects1.length = 0;
gdjs.Cr_233ditosCode.GDVezesObjects2.length = 0;
gdjs.Cr_233ditosCode.GDAgradecimentoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDAgradecimentoObjects2.length = 0;
gdjs.Cr_233ditosCode.GDUFGDObjects1.length = 0;
gdjs.Cr_233ditosCode.GDUFGDObjects2.length = 0;
gdjs.Cr_233ditosCode.GDReconectaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDReconectaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDTransicaoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDTransicaoObjects2.length = 0;

gdjs.Cr_233ditosCode.eventsList0(runtimeScene);
gdjs.Cr_233ditosCode.GDCreditosObjects1.length = 0;
gdjs.Cr_233ditosCode.GDCreditosObjects2.length = 0;
gdjs.Cr_233ditosCode.GDJogarObjects1.length = 0;
gdjs.Cr_233ditosCode.GDJogarObjects2.length = 0;
gdjs.Cr_233ditosCode.GDVoltarObjects1.length = 0;
gdjs.Cr_233ditosCode.GDVoltarObjects2.length = 0;
gdjs.Cr_233ditosCode.GDVezesObjects1.length = 0;
gdjs.Cr_233ditosCode.GDVezesObjects2.length = 0;
gdjs.Cr_233ditosCode.GDAgradecimentoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDAgradecimentoObjects2.length = 0;
gdjs.Cr_233ditosCode.GDUFGDObjects1.length = 0;
gdjs.Cr_233ditosCode.GDUFGDObjects2.length = 0;
gdjs.Cr_233ditosCode.GDReconectaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDReconectaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDTransicaoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDTransicaoObjects2.length = 0;


return;

}

gdjs['Cr_233ditosCode'] = gdjs.Cr_233ditosCode;
