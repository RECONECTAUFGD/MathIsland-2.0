gdjs.Instru_231_245esCode = {};
gdjs.Instru_231_245esCode.localVariables = [];
gdjs.Instru_231_245esCode.GDContinuarObjects1= [];
gdjs.Instru_231_245esCode.GDContinuarObjects2= [];
gdjs.Instru_231_245esCode.GDtextoObjects1= [];
gdjs.Instru_231_245esCode.GDtextoObjects2= [];
gdjs.Instru_231_245esCode.GDTransicaoObjects1= [];
gdjs.Instru_231_245esCode.GDTransicaoObjects2= [];


gdjs.Instru_231_245esCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24918308);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Instru_231_245esCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.Instru_231_245esCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Instru_231_245esCode.GDtextoObjects1[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continuar"), gdjs.Instru_231_245esCode.GDContinuarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instru_231_245esCode.GDContinuarObjects1.length;i<l;++i) {
    if ( gdjs.Instru_231_245esCode.GDContinuarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Instru_231_245esCode.GDContinuarObjects1[k] = gdjs.Instru_231_245esCode.GDContinuarObjects1[i];
        ++k;
    }
}
gdjs.Instru_231_245esCode.GDContinuarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nível1", false);
}}

}


};

gdjs.Instru_231_245esCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instru_231_245esCode.GDContinuarObjects1.length = 0;
gdjs.Instru_231_245esCode.GDContinuarObjects2.length = 0;
gdjs.Instru_231_245esCode.GDtextoObjects1.length = 0;
gdjs.Instru_231_245esCode.GDtextoObjects2.length = 0;
gdjs.Instru_231_245esCode.GDTransicaoObjects1.length = 0;
gdjs.Instru_231_245esCode.GDTransicaoObjects2.length = 0;

gdjs.Instru_231_245esCode.eventsList0(runtimeScene);
gdjs.Instru_231_245esCode.GDContinuarObjects1.length = 0;
gdjs.Instru_231_245esCode.GDContinuarObjects2.length = 0;
gdjs.Instru_231_245esCode.GDtextoObjects1.length = 0;
gdjs.Instru_231_245esCode.GDtextoObjects2.length = 0;
gdjs.Instru_231_245esCode.GDTransicaoObjects1.length = 0;
gdjs.Instru_231_245esCode.GDTransicaoObjects2.length = 0;


return;

}

gdjs['Instru_231_245esCode'] = gdjs.Instru_231_245esCode;
