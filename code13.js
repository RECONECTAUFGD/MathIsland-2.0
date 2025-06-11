gdjs.N_237vel4Code = {};
gdjs.N_237vel4Code.localVariables = [];
gdjs.N_237vel4Code.GDPlayerObjects1= [];
gdjs.N_237vel4Code.GDPlayerObjects2= [];
gdjs.N_237vel4Code.GDPlayerObjects3= [];
gdjs.N_237vel4Code.GDColisaoObjects1= [];
gdjs.N_237vel4Code.GDColisaoObjects2= [];
gdjs.N_237vel4Code.GDColisaoObjects3= [];
gdjs.N_237vel4Code.GDRuaObjects1= [];
gdjs.N_237vel4Code.GDRuaObjects2= [];
gdjs.N_237vel4Code.GDRuaObjects3= [];
gdjs.N_237vel4Code.GDLado1Objects1= [];
gdjs.N_237vel4Code.GDLado1Objects2= [];
gdjs.N_237vel4Code.GDLado1Objects3= [];
gdjs.N_237vel4Code.GDLado2Objects1= [];
gdjs.N_237vel4Code.GDLado2Objects2= [];
gdjs.N_237vel4Code.GDLado2Objects3= [];
gdjs.N_237vel4Code.GDLado3Objects1= [];
gdjs.N_237vel4Code.GDLado3Objects2= [];
gdjs.N_237vel4Code.GDLado3Objects3= [];
gdjs.N_237vel4Code.GDLado4Objects1= [];
gdjs.N_237vel4Code.GDLado4Objects2= [];
gdjs.N_237vel4Code.GDLado4Objects3= [];
gdjs.N_237vel4Code.GDDialogoObjects1= [];
gdjs.N_237vel4Code.GDDialogoObjects2= [];
gdjs.N_237vel4Code.GDDialogoObjects3= [];
gdjs.N_237vel4Code.GDMagoObjects1= [];
gdjs.N_237vel4Code.GDMagoObjects2= [];
gdjs.N_237vel4Code.GDMagoObjects3= [];
gdjs.N_237vel4Code.GDTeclaBorboletaObjects1= [];
gdjs.N_237vel4Code.GDTeclaBorboletaObjects2= [];
gdjs.N_237vel4Code.GDTeclaBorboletaObjects3= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects1= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects3= [];
gdjs.N_237vel4Code.GDTextoDialogoObjects1= [];
gdjs.N_237vel4Code.GDTextoDialogoObjects2= [];
gdjs.N_237vel4Code.GDTextoDialogoObjects3= [];
gdjs.N_237vel4Code.GDBotaoSairObjects1= [];
gdjs.N_237vel4Code.GDBotaoSairObjects2= [];
gdjs.N_237vel4Code.GDBotaoSairObjects3= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects1= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2= [];
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects3= [];
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects1= [];
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2= [];
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects3= [];
gdjs.N_237vel4Code.GDTeclaBancoObjects1= [];
gdjs.N_237vel4Code.GDTeclaBancoObjects2= [];
gdjs.N_237vel4Code.GDTeclaBancoObjects3= [];
gdjs.N_237vel4Code.GDTeclaJoanaObjects1= [];
gdjs.N_237vel4Code.GDTeclaJoanaObjects2= [];
gdjs.N_237vel4Code.GDTeclaJoanaObjects3= [];
gdjs.N_237vel4Code.GDBorboletaObjects1= [];
gdjs.N_237vel4Code.GDBorboletaObjects2= [];
gdjs.N_237vel4Code.GDBorboletaObjects3= [];
gdjs.N_237vel4Code.GDbancoObjects1= [];
gdjs.N_237vel4Code.GDbancoObjects2= [];
gdjs.N_237vel4Code.GDbancoObjects3= [];
gdjs.N_237vel4Code.GDjoanaObjects1= [];
gdjs.N_237vel4Code.GDjoanaObjects2= [];
gdjs.N_237vel4Code.GDjoanaObjects3= [];
gdjs.N_237vel4Code.GDflorObjects1= [];
gdjs.N_237vel4Code.GDflorObjects2= [];
gdjs.N_237vel4Code.GDflorObjects3= [];
gdjs.N_237vel4Code.GDarvoreObjects1= [];
gdjs.N_237vel4Code.GDarvoreObjects2= [];
gdjs.N_237vel4Code.GDarvoreObjects3= [];
gdjs.N_237vel4Code.GDBorboleta2Objects1= [];
gdjs.N_237vel4Code.GDBorboleta2Objects2= [];
gdjs.N_237vel4Code.GDBorboleta2Objects3= [];
gdjs.N_237vel4Code.GDTransicaoObjects1= [];
gdjs.N_237vel4Code.GDTransicaoObjects2= [];
gdjs.N_237vel4Code.GDTransicaoObjects3= [];


gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDColisaoObjects1Objects = Hashtable.newFrom({"Colisao": gdjs.N_237vel4Code.GDColisaoObjects1});
gdjs.N_237vel4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Frente");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Esquerda");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Trás");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Direita");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDPlayerObjects2[k] = gdjs.N_237vel4Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel4Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].setZOrder((gdjs.N_237vel4Code.GDPlayerObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDPlayerObjects1[k] = gdjs.N_237vel4Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.N_237vel4Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel4Code.GDPlayerObjects2});
gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDBorboletaObjects2Objects = Hashtable.newFrom({"Borboleta": gdjs.N_237vel4Code.GDBorboletaObjects2});
gdjs.N_237vel4Code.asyncCallback24297332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível4.1");
}gdjs.N_237vel4Code.localVariables.length = 0;
}
gdjs.N_237vel4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel4Code.asyncCallback24297332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel4Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24436916);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel4Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24434916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Borboleta"), gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Borboleta"), gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2[k] = gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSairObjects2[k] = gdjs.N_237vel4Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaBorboleta"), gdjs.N_237vel4Code.GDTeclaBorboletaObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Borboleta");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBorboletaObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBorboletaObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaBorboleta"), gdjs.N_237vel4Code.GDTeclaBorboletaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Borboleta");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBorboletaObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBorboletaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].setPosition(1191,556);
}
}}

}


};gdjs.N_237vel4Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Borboleta"), gdjs.N_237vel4Code.GDBorboletaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects, gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDBorboletaObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24438820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaBorboleta"), gdjs.N_237vel4Code.GDTeclaBorboletaObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Borboleta");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBorboletaObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBorboletaObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Borboleta");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel4Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel4Code.GDPlayerObjects2});
gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDbancoObjects2Objects = Hashtable.newFrom({"banco": gdjs.N_237vel4Code.GDbancoObjects2});
gdjs.N_237vel4Code.asyncCallback24441908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível4.2");
}gdjs.N_237vel4Code.localVariables.length = 0;
}
gdjs.N_237vel4Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel4Code.asyncCallback24441908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel4Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24411812);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel4Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24410092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Banco"), gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Banco"), gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2[k] = gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel4Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSairObjects2[k] = gdjs.N_237vel4Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaBanco"), gdjs.N_237vel4Code.GDTeclaBancoObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Banco");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBancoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBancoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaBanco"), gdjs.N_237vel4Code.GDTeclaBancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Banco");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBancoObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBancoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].setPosition(433,210);
}
}}

}


};gdjs.N_237vel4Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("banco"), gdjs.N_237vel4Code.GDbancoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects, gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDbancoObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24410908);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaBanco"), gdjs.N_237vel4Code.GDTeclaBancoObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Banco");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaBancoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaBancoObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Banco");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel4Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.N_237vel4Code.GDPlayerObjects2});
gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDjoanaObjects2Objects = Hashtable.newFrom({"joana": gdjs.N_237vel4Code.GDjoanaObjects2});
gdjs.N_237vel4Code.asyncCallback24449716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Nível4.3");
}gdjs.N_237vel4Code.localVariables.length = 0;
}
gdjs.N_237vel4Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.N_237vel4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.N_237vel4Code.asyncCallback24449716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.N_237vel4Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24447356);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextoDialogo"), gdjs.N_237vel4Code.GDTextoDialogoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDTextoDialogoObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDTextoDialogoObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDTextoDialogoObjects2[k] = gdjs.N_237vel4Code.GDTextoDialogoObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDTextoDialogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24448340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Banco"), gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBotaoSairObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSim_Joana"), gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2[k] = gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects2);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.N_237vel4Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.N_237vel4Code.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N_237vel4Code.GDBotaoSairObjects2.length;i<l;++i) {
    if ( gdjs.N_237vel4Code.GDBotaoSairObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N_237vel4Code.GDBotaoSairObjects2[k] = gdjs.N_237vel4Code.GDBotaoSairObjects2[i];
        ++k;
    }
}
gdjs.N_237vel4Code.GDBotaoSairObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeclaJoana"), gdjs.N_237vel4Code.GDTeclaJoanaObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Joana");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaJoanaObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaJoanaObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeclaJoana"), gdjs.N_237vel4Code.GDTeclaJoanaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transicao"), gdjs.N_237vel4Code.GDTransicaoObjects1);
{for(var i = 0, len = gdjs.N_237vel4Code.GDTransicaoObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTransicaoObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Joana");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaJoanaObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaJoanaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].setPosition(1024,88);
}
}}

}


};gdjs.N_237vel4Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("joana"), gdjs.N_237vel4Code.GDjoanaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDPlayerObjects2Objects, gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDjoanaObjects2Objects, 100, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24445684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeclaJoana"), gdjs.N_237vel4Code.GDTeclaJoanaObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogo_Joana");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDTeclaJoanaObjects2.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDTeclaJoanaObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogo_Joana");
if (isConditionTrue_0) {

{ //Subevents
gdjs.N_237vel4Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.N_237vel4Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Borboleta"), gdjs.N_237vel4Code.GDBorboletaObjects1);
gdjs.copyArray(runtimeScene.getObjects("banco"), gdjs.N_237vel4Code.GDbancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("joana"), gdjs.N_237vel4Code.GDjoanaObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Borboleta");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Colisoes");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Banco");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogo_Joana");
}{for(var i = 0, len = gdjs.N_237vel4Code.GDBorboletaObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDBorboletaObjects1[i].setZOrder((gdjs.N_237vel4Code.GDBorboletaObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDbancoObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDbancoObjects1[i].setZOrder((gdjs.N_237vel4Code.GDbancoObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDjoanaObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDjoanaObjects1[i].setZOrder((gdjs.N_237vel4Code.GDjoanaObjects1[i].getPointY("")));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Transição");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Colisao"), gdjs.N_237vel4Code.GDColisaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.N_237vel4Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.N_237vel4Code.GDPlayerObjects1.length !== 0 ? gdjs.N_237vel4Code.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.N_237vel4Code.mapOfGDgdjs_9546N_9595237vel4Code_9546GDColisaoObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.N_237vel4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.N_237vel4Code.GDPlayerObjects1[i].setZOrder((gdjs.N_237vel4Code.GDPlayerObjects1[i].getPointY("")));
}
}}

}


{


gdjs.N_237vel4Code.eventsList0(runtimeScene);
}


{


gdjs.N_237vel4Code.eventsList3(runtimeScene);
}


{


gdjs.N_237vel4Code.eventsList6(runtimeScene);
}


{


gdjs.N_237vel4Code.eventsList9(runtimeScene);
}


};

gdjs.N_237vel4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.N_237vel4Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel4Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel4Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel4Code.GDRuaObjects1.length = 0;
gdjs.N_237vel4Code.GDRuaObjects2.length = 0;
gdjs.N_237vel4Code.GDRuaObjects3.length = 0;
gdjs.N_237vel4Code.GDLado1Objects1.length = 0;
gdjs.N_237vel4Code.GDLado1Objects2.length = 0;
gdjs.N_237vel4Code.GDLado1Objects3.length = 0;
gdjs.N_237vel4Code.GDLado2Objects1.length = 0;
gdjs.N_237vel4Code.GDLado2Objects2.length = 0;
gdjs.N_237vel4Code.GDLado2Objects3.length = 0;
gdjs.N_237vel4Code.GDLado3Objects1.length = 0;
gdjs.N_237vel4Code.GDLado3Objects2.length = 0;
gdjs.N_237vel4Code.GDLado3Objects3.length = 0;
gdjs.N_237vel4Code.GDLado4Objects1.length = 0;
gdjs.N_237vel4Code.GDLado4Objects2.length = 0;
gdjs.N_237vel4Code.GDLado4Objects3.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel4Code.GDMagoObjects1.length = 0;
gdjs.N_237vel4Code.GDMagoObjects2.length = 0;
gdjs.N_237vel4Code.GDMagoObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDbancoObjects1.length = 0;
gdjs.N_237vel4Code.GDbancoObjects2.length = 0;
gdjs.N_237vel4Code.GDbancoObjects3.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDflorObjects1.length = 0;
gdjs.N_237vel4Code.GDflorObjects2.length = 0;
gdjs.N_237vel4Code.GDflorObjects3.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects1.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects2.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects3.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects1.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects2.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects3.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects3.length = 0;

gdjs.N_237vel4Code.eventsList10(runtimeScene);
gdjs.N_237vel4Code.GDPlayerObjects1.length = 0;
gdjs.N_237vel4Code.GDPlayerObjects2.length = 0;
gdjs.N_237vel4Code.GDPlayerObjects3.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects1.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects2.length = 0;
gdjs.N_237vel4Code.GDColisaoObjects3.length = 0;
gdjs.N_237vel4Code.GDRuaObjects1.length = 0;
gdjs.N_237vel4Code.GDRuaObjects2.length = 0;
gdjs.N_237vel4Code.GDRuaObjects3.length = 0;
gdjs.N_237vel4Code.GDLado1Objects1.length = 0;
gdjs.N_237vel4Code.GDLado1Objects2.length = 0;
gdjs.N_237vel4Code.GDLado1Objects3.length = 0;
gdjs.N_237vel4Code.GDLado2Objects1.length = 0;
gdjs.N_237vel4Code.GDLado2Objects2.length = 0;
gdjs.N_237vel4Code.GDLado2Objects3.length = 0;
gdjs.N_237vel4Code.GDLado3Objects1.length = 0;
gdjs.N_237vel4Code.GDLado3Objects2.length = 0;
gdjs.N_237vel4Code.GDLado3Objects3.length = 0;
gdjs.N_237vel4Code.GDLado4Objects1.length = 0;
gdjs.N_237vel4Code.GDLado4Objects2.length = 0;
gdjs.N_237vel4Code.GDLado4Objects3.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects1.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects2.length = 0;
gdjs.N_237vel4Code.GDDialogoObjects3.length = 0;
gdjs.N_237vel4Code.GDMagoObjects1.length = 0;
gdjs.N_237vel4Code.GDMagoObjects2.length = 0;
gdjs.N_237vel4Code.GDMagoObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaBorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects1.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects2.length = 0;
gdjs.N_237vel4Code.GDTextoDialogoObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSairObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595BancoObjects3.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDBotaoSim_9595JoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaBancoObjects3.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDTeclaJoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects1.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects2.length = 0;
gdjs.N_237vel4Code.GDBorboletaObjects3.length = 0;
gdjs.N_237vel4Code.GDbancoObjects1.length = 0;
gdjs.N_237vel4Code.GDbancoObjects2.length = 0;
gdjs.N_237vel4Code.GDbancoObjects3.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects1.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects2.length = 0;
gdjs.N_237vel4Code.GDjoanaObjects3.length = 0;
gdjs.N_237vel4Code.GDflorObjects1.length = 0;
gdjs.N_237vel4Code.GDflorObjects2.length = 0;
gdjs.N_237vel4Code.GDflorObjects3.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects1.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects2.length = 0;
gdjs.N_237vel4Code.GDarvoreObjects3.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects1.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects2.length = 0;
gdjs.N_237vel4Code.GDBorboleta2Objects3.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects1.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects2.length = 0;
gdjs.N_237vel4Code.GDTransicaoObjects3.length = 0;


return;

}

gdjs['N_237vel4Code'] = gdjs.N_237vel4Code;
