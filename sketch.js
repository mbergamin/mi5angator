//declaring variables
let bgColor, bgLight, bgDark, miçangaColor, mH1, mH2, mS1, mS2, mB1, mB2, iconRefreshB, iconSettingsB, iconRefreshW, iconSettingsW, fontBlack, fontMedium, fontLight, toggleSetting, miçangaGraph;

//loading images and assets for the web app
function preload() {
    fontBlack = loadFont('assets/Roboto-Black.ttf');
    fontMedium = loadFont('assets/Roboto-Medium.ttf');
    fontLight = loadFont('assets/Roboto-Light.ttf');
    iconRefreshB = loadImage('assets/refresh.png');
    iconSettingsB = loadImage('assets/settings.png');
    iconRefreshW = loadImage('assets/refresh_white.png');
    iconSettingsW = loadImage('assets/settings_white.png');
}

//setting up stuff for the app: canvas, the layer where we draw with the mouse, background color and brush color variables.
function setup() {
    createCanvas(windowWidth, windowHeight); 
    miçangaGraph = createGraphics(windowWidth,windowHeight);
    colorMode(HSB,100);
    imageMode(CENTER);
    toggleSetting = false;
    
    bgLight = color(15,5,90);
    bgDark = color(15,5,20);
    bgColor = bgLight;
    
    mH1 = 0;
    mH2 = 0;
    mS1 = 0;
    mS2 = 0;
    mB1 = 0;
    mB2 = 25;

}

//draw function, refreshing the interface and displaying the brush drawing
function draw() {
    background(bgColor);
    miçangate();
    if(toggleSetting) miçangaSettings();
    image(miçangaGraph,width/2,height/2);
}

//some hotkeys for debugging. 
function keyTyped() {
    if (key === '1') bgColor = bgLight, background(bgColor), miçangate();
    if (key === '2') bgColor = bgDark, background(bgColor), miçangate();
    if (key === 'c') toggleSetting = !toggleSetting;
    if (key === 'd') miçangaGraph = createGraphics(width,height);
}

//this detects when the mouse is dragged, and randomize the brush stroke every frame.
function mouseDragged() {
    miçangaColor = color(random(mH1,mH2),random(mS1,mS2),random(mB1,mB2))//color is randomized every frame that mouse is dragged
    miçangaGraph.stroke(miçangaColor);//applies the color to the brush layer.
    miçangaGraph.strokeWeight(dist(mouseX, mouseY, pmouseX, pmouseY)*2); //brush stroke is defined as the difference betwen the current and previous mouse position, i. e. the faster you drag, the wider the stroke is.
    miçangaGraph.line(mouseX, mouseY, pmouseX, pmouseY); //draws the brush stroke.
}

//mmouse interface
function mousePressed() {
    if(mouseX < 310 && mouseX > 290 && mouseY < 58 && mouseY > 36) miçangaGraph = createGraphics(width,height);
    if(mouseX < 340 && mouseX > 320 && mouseY < 58 && mouseY > 36) toggleSetting = !toggleSetting;
    if(toggleSetting) {
        if(mouseX < 163 && mouseX > 145 && mouseY < 143 && mouseY > 125) bgColor = bgDark;
        if(mouseX < 193 && mouseX > 175 && mouseY < 143 && mouseY > 125) bgColor = bgLight;
        if(mouseX < 193 && mouseX > 175 && mouseY < 173 && mouseY > 155) mH1 = 90, mH2 = 100, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 223 && mouseX > 205 && mouseY < 173 && mouseY > 155) mH1 = 8, mH2 = 20, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 253 && mouseX > 235 && mouseY < 173 && mouseY > 155) mH1 = 24, mH2 = 40, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 283 && mouseX > 265 && mouseY < 173 && mouseY > 155) mH1 = 40, mH2 = 56, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 313 && mouseX > 295 && mouseY < 173 && mouseY > 155) mH1 = 56, mH2 = 72, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 343 && mouseX > 325 && mouseY < 173 && mouseY > 155) mH1 = 74, mH2 = 90, mS1 = 70, mS2 = 90, mB1 = 90, mB2 = 100;
        if(mouseX < 373 && mouseX > 355 && mouseY < 173 && mouseY > 155) mH1 = 15, mH2 = 15, mS1 = 5, mS2 = 15, mB1 = 90, mB2 = 100;
        if(mouseX < 403 && mouseX > 385 && mouseY < 173 && mouseY > 155) mH1 = 0, mH2 = 0, mS1 = 0, mS2 = 0, mB1 = 0, mB2 = 25;
    }
}

//Introduction interface and icons
function miçangate() {
    background(bgColor);
    if(bgColor == bgDark) fill(255), stroke(255), image(iconRefreshW,300,48), image(iconSettingsW,330,48); 
    else fill(0), stroke(0), image(iconRefreshB,300,48), image(iconSettingsB,330,48); 
    strokeWeight(1);
    line(30,80,260,80);
    strokeWeight(0);  
    textSize(36);
    textFont(fontBlack);
    text('MIÇANGATOR',30,60);
    textSize(18);
    textFont(fontLight);
    text('Pra você de humanas (ou não) que queria vender miçanga na praia, mas agora está trancado em casa. Clica e arrasta o mouse.',30,110);
    
}

//Settings interface
function miçangaSettings() {
    if(toggleSetting) {
        text('Cor do fundo:',30,140);
        text('Cor das miçanga:',30,170);
        push();
        fill(bgDark);
        strokeWeight(1);
        ellipse(154,134,18,18);
        fill(bgLight);
        ellipse(184,134,18,18);
        
        fill(96,80,100);
        ellipse(184,164,18,18);
        fill(16,80,100);
        ellipse(214,164,18,18);
        fill(32,80,100);
        ellipse(244,164,18,18);
        fill(48,80,100);
        ellipse(274,164,18,18);
        fill(64,80,100);
        ellipse(304,164,18,18);
        fill(82,80,100);
        ellipse(334,164,18,18);
        fill(15,5,100);
        ellipse(364,164,18,18);
        fill(0,0,10);
        ellipse(394,164,18,18);
        pop();
    }    
}
    