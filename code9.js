gdjs.N_237vel3Code = {};
gdjs.N_237vel3Code.localVariables = [];
gdjs.N_237vel3Code.GDPlayerObjects1= [];
gdjs.N_237vel3Code.GDPlayerObjects2= [];
gdjs.N_237vel3Code.GDPlayerObjects3= [];
gdjs.N_237vel3Code.GDColisaoObjects1= [];
gdjs.N_237vel3Code.GDColisaoObjects2= [];
gdjs.N_237vel3Code.GDColisaoObjects3= [];
gdjs.N_237vel3Code.GDRuaObjects1= [];
gdjs.N_237vel3Code.GDRuaObjects2= [];
gdjs.N_237vel3Code.GDRuaObjects3= [];
gdjs.N_237vel3Code.GDLado1Objects1= [];
gdjs.N_237vel3Code.GDLado1Objects2= [];
gdjs.N_237vel3Code.GDLado1Objects3= [];
gdjs.N_237vel3Code.GDLado2Objects1= [];
gdjs.N_237vel3Code.GDLado2Objects2= [];
gdjs.N_237vel3Code.GDLado2Objects3= [];
gdjs.N_237vel3Code.GDLado3Objects1= [];
gdjs.N_237vel3Code.GDLado3Objects2= [];
gdjs.N_237vel3Code.GDLado3Objects3= [];
gdjs.N_237vel3Code.GDLado4Objects1= [];
gdjs.N_237vel3Code.GDLado4Objects2= [];
gdjs.N_237vel3Code.GDLado4Objects3= [];
gdjs.N_237vel3Code.GDDialogoObjects1= [];
gdjs.N_237vel3Code.GDDialogoObjects2= [];
gdjs.N_237vel3Code.GDDialogoObjects3= [];
gdjs.N_237vel3Code.GDMagoObjects1= [];
gdjs.N_237vel3Code.GDMagoObjects2= [];
gdjs.N_237vel3Code.GDMagoObjects3= [];
gdjs.N_237vel3Code.GDTeclaEsquiloObjects1= [];
gdjs.N_237vel3Code.GDTeclaEsquiloObjects2= [];
gdjs.N_237vel3Code.GDTeclaEsquiloObjects3= [];
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects1= [];
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2= [];
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects3= [];
gdjs.N_237vel3Code.GDTextoDialogoObjects1= [];
gdjs.N_237vel3Code.GDTextoDialogoObjects2= [];
gdjs.N_237vel3Code.GDTextoDialogoObjects3= [];
gdjs.N_237vel3Code.GDBotaoSairObjects1= [];
gdjs.N_237vel3Code.GDBotaoSairObjects2= [];
gdjs.N_237vel3Code.GDBotaoSairObjects3= [];
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects1= [];
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2= [];
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects3= [];
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects1= [];
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2= [];
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects3= [];
gdjs.N_237vel3Code.GDTeclaAboboraObjects1= [];
gdjs.N_237vel3Code.GDTeclaAboboraObjects2= [];
gdjs.N_237vel3Code.GDTeclaAboboraObjects3= [];
gdjs.N_237vel3Code.GDTeclaCorujaObjects1= [];
gdjs.N_237vel3Code.GDTeclaCorujaObjects2= [];
gdjs.N_237vel3Code.GDTeclaCorujaObjects3= [];
gdjs.N_237vel3Code.GDArvoreObjects1= [];
gdjs.N_237vel3Code.GDArvoreObjects2= [];
gdjs.N_237vel3Code.GDArvoreObjects3= [];
gdjs.N_237vel3Code.GDAboboraObjects1= [];
gdjs.N_237vel3Code.GDAboboraObjects2= [];
gdjs.N_237vel3Code.GDAboboraObjects3= [];
gdjs.N_237vel3Code.GDesquiloObjects1= [];
gdjs.N_237vel3Code.GDesquiloObjects2= [];
gdjs.N_237vel3Code.GDesquiloObjects3= [];
gdjs.N_237vel3Code.GDCorujaObjects1= [];
gdjs.N_237vel3Code.GDCorujaObjects2= [];
gdjs.N_237vel3Code.GDCorujaObjects3= [];
gdjs.N_237vel3Code.GDFolha1Objects1= [];
gdjs.N_237vel3Code.GDFolha1Objects2= [];
gdjs.N_237vel3Code.GDFolha1Objects3= [];
gdjs.N_237vel3Code.GDFolha2Objects1= [];
gdjs.N_237vel3Code.GDFolha2Objects2= [];
gdjs.N_237vel3Code.GDFolha2Objects3= [];
gdjs.N_237vel3Code.GDTransicaoObjects1= [];
gdjs.N_237vel3Code.GDTransicaoObjects2= [];
gdjs.N_237vel3Code.GDTransicaoObjects3= [];


gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDColisaoObjects1Objects = Hashtable.newFrom({"Colisao": gdjs.N_237vel3Code.GDColisaoObjects1});
gdjs.N_237vel3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Frente");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Esquerda");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Trás");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Direita");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDPlayerObjects2[k] = gdjs.N_237vel3Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel3Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].setZOrder((gdjs.N_237vel3Code.GDPlayerObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDPlayerObjects1[k] = gdjs.N_237vel3Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel3Code.GDPlayerObjects2});
gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDesquiloObjects2Objects = Hashtable.newFrom({"esquilo": gdjs.N_237vel3Code.GDesquiloObjects2});
gdjs.N_237vel3Code.asyncCallback23983612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível3.1");
}gdjs.N_237vel3Code.localVariables.length = 0;
}
gdjs.N_237vel3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel3Code.asyncCallback23983612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel3Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23979524);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel3Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23981236);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Esquilo"), gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Esquilo"), gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2[k] = gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSairObjects2[k] = gdjs.N_237vel3Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaEsquilo"), gdjs.N_237vel3Code.GDTeclaEsquiloObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Esquilo");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaEsquiloObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaEsquiloObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaEsquilo"), gdjs.N_237vel3Code.GDTeclaEsquiloObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Esquilo");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaEsquiloObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaEsquiloObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].setPosition(491,681);
}
}}

}


};gdjs.N_237vel3Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("esquilo"), gdjs.N_237vel3Code.GDesquiloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects, gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDesquiloObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23977524);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaEsquilo"), gdjs.N_237vel3Code.GDTeclaEsquiloObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Esquilo");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaEsquiloObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaEsquiloObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Esquilo");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel3Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel3Code.GDPlayerObjects2});
gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDAboboraObjects2Objects = Hashtable.newFrom({"Abobora": gdjs.N_237vel3Code.GDAboboraObjects2});
gdjs.N_237vel3Code.asyncCallback23973764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível3.2");
}gdjs.N_237vel3Code.localVariables.length = 0;
}
gdjs.N_237vel3Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel3Code.asyncCallback23973764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23989492);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel3Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23985876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Abobora"), gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Abobora"), gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2[k] = gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel3Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSairObjects2[k] = gdjs.N_237vel3Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaAbobora"), gdjs.N_237vel3Code.GDTeclaAboboraObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Abobora");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaAboboraObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaAboboraObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaAbobora"), gdjs.N_237vel3Code.GDTeclaAboboraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Abobora");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaAboboraObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaAboboraObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].setPosition(926,320);
}
}}

}


};gdjs.N_237vel3Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Abobora"), gdjs.N_237vel3Code.GDAboboraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects, gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDAboboraObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23987340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaAbobora"), gdjs.N_237vel3Code.GDTeclaAboboraObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Abobora");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaAboboraObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaAboboraObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Abobora");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel3Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel3Code.GDPlayerObjects2});
gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDCorujaObjects2Objects = Hashtable.newFrom({"Coruja": gdjs.N_237vel3Code.GDCorujaObjects2});
gdjs.N_237vel3Code.asyncCallback23950692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível3.3");
}gdjs.N_237vel3Code.localVariables.length = 0;
}
gdjs.N_237vel3Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel3Code.asyncCallback23950692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel3Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23982300);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel3Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel3Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23948044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Abobora"), gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Coruja"), gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2[k] = gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel3Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel3Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel3Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel3Code.GDBotaoSairObjects2[k] = gdjs.N_237vel3Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel3Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaCoruja"), gdjs.N_237vel3Code.GDTeclaCorujaObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Coruja");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaCorujaObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaCorujaObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaCoruja"), gdjs.N_237vel3Code.GDTeclaCorujaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel3Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel3Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Coruja");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaCorujaObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaCorujaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].setPosition(1024,88);
}
}}

}


};gdjs.N_237vel3Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coruja"), gdjs.N_237vel3Code.GDCorujaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDPlayerObjects2Objects, gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDCorujaObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23981596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaCoruja"), gdjs.N_237vel3Code.GDTeclaCorujaObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Coruja");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDTeclaCorujaObjects2.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDTeclaCorujaObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Coruja");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel3Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel3Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Abobora"), gdjs.N_237vel3Code.GDAboboraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arvore"), gdjs.N_237vel3Code.GDArvoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coruja"), gdjs.N_237vel3Code.GDCorujaObjects1);
gdjs.copyArray(runtimeScene.getObjects("esquilo"), gdjs.N_237vel3Code.GDesquiloObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Esquilo");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Colisoes");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Abobora");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Coruja");
}{for(var i = 0, len = gdjs.N_237vel3Code.GDesquiloObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDesquiloObjects1[i].setZOrder((gdjs.N_237vel3Code.GDesquiloObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDAboboraObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDAboboraObjects1[i].setZOrder((gdjs.N_237vel3Code.GDAboboraObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDCorujaObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDCorujaObjects1[i].setZOrder((gdjs.N_237vel3Code.GDCorujaObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDArvoreObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDArvoreObjects1[i].setZOrder((gdjs.N_237vel3Code.GDArvoreObjects1[i].getPointY("")));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Colisao"), gdjs.N_237vel3Code.GDColisaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel3Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.N_237vel3Code.GDPlayerObjects1.length !== 0 ? gdjs.N_237vel3Code.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.N_237vel3Code.mapOfGDgdjs_9546N_9595237vel3Code_9546GDColisaoObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.N_237vel3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel3Code.GDPlayerObjects1[i].setZOrder((gdjs.N_237vel3Code.GDPlayerObjects1[i].getPointY("")));
}
}}

}


{


gdjs.N_237vel3Code.eventsList0(runtimeScene);
}


{


gdjs.N_237vel3Code.eventsList3(runtimeScene);
}


{


gdjs.N_237vel3Code.eventsList6(runtimeScene);
}


{


gdjs.N_237vel3Code.eventsList9(runtimeScene);
}


};

gdjs.N_237vel3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.N_237vel3Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel3Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel3Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel3Code.GDRuaObjects1.length = 0;
gdjs.N_237vel3Code.GDRuaObjects2.length = 0;
gdjs.N_237vel3Code.GDRuaObjects3.length = 0;
gdjs.N_237vel3Code.GDLado1Objects1.length = 0;
gdjs.N_237vel3Code.GDLado1Objects2.length = 0;
gdjs.N_237vel3Code.GDLado1Objects3.length = 0;
gdjs.N_237vel3Code.GDLado2Objects1.length = 0;
gdjs.N_237vel3Code.GDLado2Objects2.length = 0;
gdjs.N_237vel3Code.GDLado2Objects3.length = 0;
gdjs.N_237vel3Code.GDLado3Objects1.length = 0;
gdjs.N_237vel3Code.GDLado3Objects2.length = 0;
gdjs.N_237vel3Code.GDLado3Objects3.length = 0;
gdjs.N_237vel3Code.GDLado4Objects1.length = 0;
gdjs.N_237vel3Code.GDLado4Objects2.length = 0;
gdjs.N_237vel3Code.GDLado4Objects3.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel3Code.GDMagoObjects1.length = 0;
gdjs.N_237vel3Code.GDMagoObjects2.length = 0;
gdjs.N_237vel3Code.GDMagoObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects1.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects2.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects3.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects1.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects2.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects3.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects1.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects2.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects3.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects3.length = 0;

gdjs.N_237vel3Code.eventsList10(runtimeScene);
gdjs.N_237vel3Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel3Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel3Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel3Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel3Code.GDRuaObjects1.length = 0;
gdjs.N_237vel3Code.GDRuaObjects2.length = 0;
gdjs.N_237vel3Code.GDRuaObjects3.length = 0;
gdjs.N_237vel3Code.GDLado1Objects1.length = 0;
gdjs.N_237vel3Code.GDLado1Objects2.length = 0;
gdjs.N_237vel3Code.GDLado1Objects3.length = 0;
gdjs.N_237vel3Code.GDLado2Objects1.length = 0;
gdjs.N_237vel3Code.GDLado2Objects2.length = 0;
gdjs.N_237vel3Code.GDLado2Objects3.length = 0;
gdjs.N_237vel3Code.GDLado3Objects1.length = 0;
gdjs.N_237vel3Code.GDLado3Objects2.length = 0;
gdjs.N_237vel3Code.GDLado3Objects3.length = 0;
gdjs.N_237vel3Code.GDLado4Objects1.length = 0;
gdjs.N_237vel3Code.GDLado4Objects2.length = 0;
gdjs.N_237vel3Code.GDLado4Objects3.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel3Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel3Code.GDMagoObjects1.length = 0;
gdjs.N_237vel3Code.GDMagoObjects2.length = 0;
gdjs.N_237vel3Code.GDMagoObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaEsquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595EsquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel3Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595AboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDBotaoSim_9595CorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaAboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDTeclaCorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects1.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects2.length = 0;
gdjs.N_237vel3Code.GDArvoreObjects3.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects1.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects2.length = 0;
gdjs.N_237vel3Code.GDAboboraObjects3.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects1.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects2.length = 0;
gdjs.N_237vel3Code.GDesquiloObjects3.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects1.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects2.length = 0;
gdjs.N_237vel3Code.GDCorujaObjects3.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects1.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects2.length = 0;
gdjs.N_237vel3Code.GDFolha1Objects3.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects1.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects2.length = 0;
gdjs.N_237vel3Code.GDFolha2Objects3.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel3Code.GDTransicaoObjects3.length = 0;


return;

}

gdjs['N_237vel3Code'] = gdjs.N_237vel3Code;
