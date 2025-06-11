gdjs.N_237vel2Code = {};
gdjs.N_237vel2Code.localVariables = [];
gdjs.N_237vel2Code.GDPlayerObjects1= [];
gdjs.N_237vel2Code.GDPlayerObjects2= [];
gdjs.N_237vel2Code.GDPlayerObjects3= [];
gdjs.N_237vel2Code.GD_95193guaObjects1= [];
gdjs.N_237vel2Code.GD_95193guaObjects2= [];
gdjs.N_237vel2Code.GD_95193guaObjects3= [];
gdjs.N_237vel2Code.GDColisaoObjects1= [];
gdjs.N_237vel2Code.GDColisaoObjects2= [];
gdjs.N_237vel2Code.GDColisaoObjects3= [];
gdjs.N_237vel2Code.GDDialogoObjects1= [];
gdjs.N_237vel2Code.GDDialogoObjects2= [];
gdjs.N_237vel2Code.GDDialogoObjects3= [];
gdjs.N_237vel2Code.GDMagoObjects1= [];
gdjs.N_237vel2Code.GDMagoObjects2= [];
gdjs.N_237vel2Code.GDMagoObjects3= [];
gdjs.N_237vel2Code.GDTeclaIgluObjects1= [];
gdjs.N_237vel2Code.GDTeclaIgluObjects2= [];
gdjs.N_237vel2Code.GDTeclaIgluObjects3= [];
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects1= [];
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2= [];
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects3= [];
gdjs.N_237vel2Code.GDTextoDialogoObjects1= [];
gdjs.N_237vel2Code.GDTextoDialogoObjects2= [];
gdjs.N_237vel2Code.GDTextoDialogoObjects3= [];
gdjs.N_237vel2Code.GDBotaoSairObjects1= [];
gdjs.N_237vel2Code.GDBotaoSairObjects2= [];
gdjs.N_237vel2Code.GDBotaoSairObjects3= [];
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects1= [];
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2= [];
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects3= [];
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects1= [];
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2= [];
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects3= [];
gdjs.N_237vel2Code.GDArvore2Objects1= [];
gdjs.N_237vel2Code.GDArvore2Objects2= [];
gdjs.N_237vel2Code.GDArvore2Objects3= [];
gdjs.N_237vel2Code.GDIgluObjects1= [];
gdjs.N_237vel2Code.GDIgluObjects2= [];
gdjs.N_237vel2Code.GDIgluObjects3= [];
gdjs.N_237vel2Code.GDBonecoObjects1= [];
gdjs.N_237vel2Code.GDBonecoObjects2= [];
gdjs.N_237vel2Code.GDBonecoObjects3= [];
gdjs.N_237vel2Code.GDCasaObjects1= [];
gdjs.N_237vel2Code.GDCasaObjects2= [];
gdjs.N_237vel2Code.GDCasaObjects3= [];
gdjs.N_237vel2Code.GDRuaObjects1= [];
gdjs.N_237vel2Code.GDRuaObjects2= [];
gdjs.N_237vel2Code.GDRuaObjects3= [];
gdjs.N_237vel2Code.GDLado1Objects1= [];
gdjs.N_237vel2Code.GDLado1Objects2= [];
gdjs.N_237vel2Code.GDLado1Objects3= [];
gdjs.N_237vel2Code.GDTeclaBonecoObjects1= [];
gdjs.N_237vel2Code.GDTeclaBonecoObjects2= [];
gdjs.N_237vel2Code.GDTeclaBonecoObjects3= [];
gdjs.N_237vel2Code.GDTeclaCasaObjects1= [];
gdjs.N_237vel2Code.GDTeclaCasaObjects2= [];
gdjs.N_237vel2Code.GDTeclaCasaObjects3= [];
gdjs.N_237vel2Code.GDFlocodeNeveObjects1= [];
gdjs.N_237vel2Code.GDFlocodeNeveObjects2= [];
gdjs.N_237vel2Code.GDFlocodeNeveObjects3= [];
gdjs.N_237vel2Code.GDPinguimObjects1= [];
gdjs.N_237vel2Code.GDPinguimObjects2= [];
gdjs.N_237vel2Code.GDPinguimObjects3= [];
gdjs.N_237vel2Code.GDMontanhaObjects1= [];
gdjs.N_237vel2Code.GDMontanhaObjects2= [];
gdjs.N_237vel2Code.GDMontanhaObjects3= [];
gdjs.N_237vel2Code.GDTransicaoObjects1= [];
gdjs.N_237vel2Code.GDTransicaoObjects2= [];
gdjs.N_237vel2Code.GDTransicaoObjects3= [];


gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDColisaoObjects1Objects = Hashtable.newFrom({"Colisao": gdjs.N_237vel2Code.GDColisaoObjects1});
gdjs.N_237vel2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Frente");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Esquerda");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Trás");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Direita");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDPlayerObjects2[k] = gdjs.N_237vel2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].setZOrder((gdjs.N_237vel2Code.GDPlayerObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDPlayerObjects1[k] = gdjs.N_237vel2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel2Code.GDPlayerObjects2});
gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDIgluObjects2Objects = Hashtable.newFrom({"Iglu": gdjs.N_237vel2Code.GDIgluObjects2});
gdjs.N_237vel2Code.asyncCallback23517708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível2.1");
}gdjs.N_237vel2Code.localVariables.length = 0;
}
gdjs.N_237vel2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel2Code.asyncCallback23517708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23513580);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel2Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23515772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Iglu"), gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Iglu"), gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2[k] = gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSairObjects2[k] = gdjs.N_237vel2Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaIglu"), gdjs.N_237vel2Code.GDTeclaIgluObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Iglu");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaIgluObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaIgluObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaIglu"), gdjs.N_237vel2Code.GDTeclaIgluObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Iglu");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaIgluObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaIgluObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].setPosition(1132,725);
}
}}

}


};gdjs.N_237vel2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Iglu"), gdjs.N_237vel2Code.GDIgluObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects, gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDIgluObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23512492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaIglu"), gdjs.N_237vel2Code.GDTeclaIgluObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Iglu");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaIgluObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaIgluObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Iglu");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel2Code.GDPlayerObjects2});
gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDBonecoObjects2Objects = Hashtable.newFrom({"Boneco": gdjs.N_237vel2Code.GDBonecoObjects2});
gdjs.N_237vel2Code.asyncCallback23527308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível2.2");
}gdjs.N_237vel2Code.localVariables.length = 0;
}
gdjs.N_237vel2Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel2Code.asyncCallback23527308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23523492);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel2Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23525204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Boneco"), gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Boneco"), gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2[k] = gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel2Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSairObjects2[k] = gdjs.N_237vel2Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaBoneco"), gdjs.N_237vel2Code.GDTeclaBonecoObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Boneco");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaBonecoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaBonecoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaBoneco"), gdjs.N_237vel2Code.GDTeclaBonecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Boneco");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaBonecoObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaBonecoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].setPosition(229,374);
}
}}

}


};gdjs.N_237vel2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boneco"), gdjs.N_237vel2Code.GDBonecoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects, gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDBonecoObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23521340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaBoneco"), gdjs.N_237vel2Code.GDTeclaBonecoObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Boneco");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaBonecoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaBonecoObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Boneco");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel2Code.GDPlayerObjects2});
gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDCasaObjects2Objects = Hashtable.newFrom({"Casa": gdjs.N_237vel2Code.GDCasaObjects2});
gdjs.N_237vel2Code.asyncCallback23388836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível2.3");
}gdjs.N_237vel2Code.localVariables.length = 0;
}
gdjs.N_237vel2Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel2Code.asyncCallback23388836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23519140);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel2Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel2Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23507724);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Boneco"), gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Casa"), gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2[k] = gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel2Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel2Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel2Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel2Code.GDBotaoSairObjects2[k] = gdjs.N_237vel2Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel2Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaCasa"), gdjs.N_237vel2Code.GDTeclaCasaObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Casa");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaCasaObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaCasaObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaCasa"), gdjs.N_237vel2Code.GDTeclaCasaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel2Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel2Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Casa");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaCasaObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaCasaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].setPosition(227,1041);
}
}}

}


};gdjs.N_237vel2Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Casa"), gdjs.N_237vel2Code.GDCasaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDPlayerObjects2Objects, gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDCasaObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23531308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaCasa"), gdjs.N_237vel2Code.GDTeclaCasaObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Casa");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDTeclaCasaObjects2.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDTeclaCasaObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Casa");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel2Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel2Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arvore2"), gdjs.N_237vel2Code.GDArvore2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Boneco"), gdjs.N_237vel2Code.GDBonecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Casa"), gdjs.N_237vel2Code.GDCasaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Iglu"), gdjs.N_237vel2Code.GDIgluObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Iglu");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Colisoes");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Boneco");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Casa");
}{for(var i = 0, len = gdjs.N_237vel2Code.GDIgluObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDIgluObjects1[i].setZOrder((gdjs.N_237vel2Code.GDIgluObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDCasaObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDCasaObjects1[i].setZOrder((gdjs.N_237vel2Code.GDCasaObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDBonecoObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDBonecoObjects1[i].setZOrder((gdjs.N_237vel2Code.GDBonecoObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDArvore2Objects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDArvore2Objects1[i].setZOrder((gdjs.N_237vel2Code.GDArvore2Objects1[i].getPointY("")));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Colisao"), gdjs.N_237vel2Code.GDColisaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel2Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.N_237vel2Code.GDPlayerObjects1.length !== 0 ? gdjs.N_237vel2Code.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.N_237vel2Code.mapOfGDgdjs_9546N_9595237vel2Code_9546GDColisaoObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.N_237vel2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel2Code.GDPlayerObjects1[i].setZOrder((gdjs.N_237vel2Code.GDPlayerObjects1[i].getPointY("")));
}
}}

}


{


gdjs.N_237vel2Code.eventsList0(runtimeScene);
}


{


gdjs.N_237vel2Code.eventsList3(runtimeScene);
}


{


gdjs.N_237vel2Code.eventsList6(runtimeScene);
}


{


gdjs.N_237vel2Code.eventsList9(runtimeScene);
}


};

gdjs.N_237vel2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.N_237vel2Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel2Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel2Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects1.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects2.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects3.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel2Code.GDMagoObjects1.length = 0;
gdjs.N_237vel2Code.GDMagoObjects2.length = 0;
gdjs.N_237vel2Code.GDMagoObjects3.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects3.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects3.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects1.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects2.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects3.length = 0;
gdjs.N_237vel2Code.GDIgluObjects1.length = 0;
gdjs.N_237vel2Code.GDIgluObjects2.length = 0;
gdjs.N_237vel2Code.GDIgluObjects3.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDCasaObjects1.length = 0;
gdjs.N_237vel2Code.GDCasaObjects2.length = 0;
gdjs.N_237vel2Code.GDCasaObjects3.length = 0;
gdjs.N_237vel2Code.GDRuaObjects1.length = 0;
gdjs.N_237vel2Code.GDRuaObjects2.length = 0;
gdjs.N_237vel2Code.GDRuaObjects3.length = 0;
gdjs.N_237vel2Code.GDLado1Objects1.length = 0;
gdjs.N_237vel2Code.GDLado1Objects2.length = 0;
gdjs.N_237vel2Code.GDLado1Objects3.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects3.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects1.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects2.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects3.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects1.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects2.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects3.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects1.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects2.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects3.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects3.length = 0;

gdjs.N_237vel2Code.eventsList10(runtimeScene);
gdjs.N_237vel2Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel2Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel2Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects1.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects2.length = 0;
gdjs.N_237vel2Code.GD_95193guaObjects3.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel2Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel2Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel2Code.GDMagoObjects1.length = 0;
gdjs.N_237vel2Code.GDMagoObjects2.length = 0;
gdjs.N_237vel2Code.GDMagoObjects3.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaIgluObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595IgluObjects3.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel2Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595BonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects1.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects2.length = 0;
gdjs.N_237vel2Code.GDBotaoSim_9595CasaObjects3.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects1.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects2.length = 0;
gdjs.N_237vel2Code.GDArvore2Objects3.length = 0;
gdjs.N_237vel2Code.GDIgluObjects1.length = 0;
gdjs.N_237vel2Code.GDIgluObjects2.length = 0;
gdjs.N_237vel2Code.GDIgluObjects3.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDBonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDCasaObjects1.length = 0;
gdjs.N_237vel2Code.GDCasaObjects2.length = 0;
gdjs.N_237vel2Code.GDCasaObjects3.length = 0;
gdjs.N_237vel2Code.GDRuaObjects1.length = 0;
gdjs.N_237vel2Code.GDRuaObjects2.length = 0;
gdjs.N_237vel2Code.GDRuaObjects3.length = 0;
gdjs.N_237vel2Code.GDLado1Objects1.length = 0;
gdjs.N_237vel2Code.GDLado1Objects2.length = 0;
gdjs.N_237vel2Code.GDLado1Objects3.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaBonecoObjects3.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects1.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects2.length = 0;
gdjs.N_237vel2Code.GDTeclaCasaObjects3.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects1.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects2.length = 0;
gdjs.N_237vel2Code.GDFlocodeNeveObjects3.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects1.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects2.length = 0;
gdjs.N_237vel2Code.GDPinguimObjects3.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects1.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects2.length = 0;
gdjs.N_237vel2Code.GDMontanhaObjects3.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel2Code.GDTransicaoObjects3.length = 0;


return;

}

gdjs['N_237vel2Code'] = gdjs.N_237vel2Code;
