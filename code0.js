gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDbgObjects1= [];
gdjs.Untitled_32sceneCode.GDbgObjects2= [];
gdjs.Untitled_32sceneCode.GDbgObjects3= [];
gdjs.Untitled_32sceneCode.GDeaseObjects1= [];
gdjs.Untitled_32sceneCode.GDeaseObjects2= [];
gdjs.Untitled_32sceneCode.GDeaseObjects3= [];
gdjs.Untitled_32sceneCode.GDcursorObjects1= [];
gdjs.Untitled_32sceneCode.GDcursorObjects2= [];
gdjs.Untitled_32sceneCode.GDcursorObjects3= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects2= [];
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects3= [];
gdjs.Untitled_32sceneCode.GDuiObjects1= [];
gdjs.Untitled_32sceneCode.GDuiObjects2= [];
gdjs.Untitled_32sceneCode.GDuiObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewParticlesEmitterObjects1Objects = Hashtable.newFrom({"NewParticlesEmitter": gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewParticlesEmitterObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].getAnimation() == 1 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].setPosition(-(10) * (0.004 * gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)),-(36) * (0.004 * gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].getAnimation() == 2 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].setPosition(-(10) * (0.005 * gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)) * 1 + 1,-(6) * (0.009 * gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)) + 700);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].getAnimation() == 3 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].setPosition(-(10) * (0.0025 * gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)),-(36) * (0.002 * gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].getAnimation() == 4 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2[i].setPosition(-(10) * (0.0025 * gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)) - 200,-(36) * (0.002 * gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects2[i].getAnimation() == 0 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects2[k] = gdjs.Untitled_32sceneCode.GDuiObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) * 0.1 + 700, "UI", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) * 0.1 + 500, "UI", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects2[i].getAnimation() == 1 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects2[k] = gdjs.Untitled_32sceneCode.GDuiObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) * 0.14 + 1000, "UI2", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) * 0.11 + 500, "UI2", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects2[i].getAnimation() == 2 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects2[k] = gdjs.Untitled_32sceneCode.GDuiObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) * 0.18 + 1000, "UI3", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) * 0.18 + 500, "UI3", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects1[i].getAnimation() == 3 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects1[k] = gdjs.Untitled_32sceneCode.GDuiObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) * 0.06 + 1000, "UI4", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) * 0.07 + 500, "UI4", 0);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDuiObjects1Objects = Hashtable.newFrom({"ui": gdjs.Untitled_32sceneCode.GDuiObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDuiObjects1, gdjs.Untitled_32sceneCode.GDuiObjects2);


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects2[i].getAnimation() == 0 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects2[k] = gdjs.Untitled_32sceneCode.GDuiObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://soundcloud.com/wateryourroses", runtimeScene);
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDuiObjects1 */

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects1[i].getAnimation() == 3 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects1[k] = gdjs.Untitled_32sceneCode.GDuiObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://wateryourroses.newgrounds.com/", runtimeScene);
}}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].resetTimer("strings");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setOpacity(40);
}
}{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight(), false);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Untitled_32sceneCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) * 0.005, "LOGO", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) * 0.005, "LOGO", 0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ease"), gdjs.Untitled_32sceneCode.GDeaseObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDeaseObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDeaseObjects1[i].getX() <= 0 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDeaseObjects1[k] = gdjs.Untitled_32sceneCode.GDeaseObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDeaseObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].resetTimer("strings");
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDuiObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects1[i].getAnimation() == 2 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects1[k] = gdjs.Untitled_32sceneCode.GDuiObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDuiObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDuiObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDuiObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ui"), gdjs.Untitled_32sceneCode.GDuiObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDuiObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDuiObjects1[i].getAnimation() == 1 ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDuiObjects1[k] = gdjs.Untitled_32sceneCode.GDuiObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDuiObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDuiObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDuiObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDuiObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setX(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getX() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setWidth(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getWidth() + (50));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbgObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDeaseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDeaseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDeaseObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcursorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcursorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcursorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDuiObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDuiObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDuiObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
