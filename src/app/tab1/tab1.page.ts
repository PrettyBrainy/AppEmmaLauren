<ion-header>
  <ion-toolbar>
    <ion-title>HOME</ion-title>
    <ion-buttons slot="end">
      <ion-button routerLink = '/profile' routerDirection = "root">
        <ion-icon slot="icon-only" name="person"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  
  <ion-grid> <!--__________________Welcome Card____________________-->
    <ion-card class="welcome-card" justify-content-center align-items-center>
      <ion-img src='./assets/pictures/MI_banner.jpg'></ion-img>
        <ion-card-header>
          <ion-card-title class="welcome-card-title"><font color = #1ba561><b>Welcome to MISSion: Innovation.</b></font></ion-card-title>
        </ion-card-header>
      <ion-card-content class="welcome-card-content">
        <p class="welcome-card-content">You're going to love your new lifestyle.</p>
      </ion-card-content>
      </ion-card>
  </ion-grid>



  <ion-grid padding>
    <ion-col style="text-align:center">
      <h5>This 7-week challenge will change the way you 
      think about your behavior and understanding of 
      7 different topics. Each week, we will challenge 
      you to pledge to change a number of your behavior   
      as it relates to that week's peak. Every week, by taking the 
      pledges, we will climb a peak and accept its challenges. Each challenge 
      that you accept and complete will reduce your carbon 
      footprint. While the views and terrain of each peak are different, 
      the climb to the top of all seven peaks will 
      reduce your negative impact on the world.
      </h5>
    </ion-col>

    <ion-col width-50 style="text-align: center" >
      <h1>Ready to get started?</h1> 
    </ion-col>

    <!-- __________________Button to view target overview__________-->
    <ion-row>
      <ion-col width-50 style="text-align: center">
        <ion-button 
        size="large" 
        routerLink = "/target-overview" 
        routerDirection = "root">
          View the Targets  
        </ion-button>
      </ion-col>
    </ion-row> 
      
      <br>

    <!--___________Button to view Leaderboard________________-->
    <ion-row>
      <ion-col width-50 style="text-align: center">
        <ion-button
        size="large"
        routerLink = "/leaderboard"
        routerDirection = "root">
          View the Leaderboard
          </ion-button>
        </ion-col>
      </ion-row>
      
  </ion-grid>
    
  <br>

    
  <div class="greenBackground"> <!--__________Green Block: User Progress___________-->
    
    <br>

    <ion-grid>
      <ion-card class="welcome-card">
        <ion-card-content class="welcome-card-title">
          
            Your Points: {{this.userPoints}}
          
        </ion-card-content>
      </ion-card>

      <div text-center>
        <circle-progress 
        [percent]= "userProgressBar"
        [radius]="90"
        [outerStrokeWidth]="9"
        [innerStrokeWidth]="5"
        [outerStrokeColor]="'#f99f38'"
        [innerStrokeColor]="'#1ba561'"
        [animation]="true"
        [animationDuration]="500"
        [imageSrc]= "'./assets/pictures/Logo-circle-cropped.png'" 
        [showImage]="true"
        [imageWidth]="153"
        [imageHeight]="153">
        </circle-progress>
        <h3>Your Total Progress</h3>
      </div>
    </ion-grid>
    
    <br>
  </div>

  <div class="orangeBackground"> <!--______________OrangeBlock: Team Progress_________-->
    <br>
    
    <ion-grid>
      <ion-card class="welcome-card">
        <ion-card-content class="welcome-card-title" [hidden] = "hideTeamProgressBar">
            Your Team's Points: {{this.teamPoints}}
        </ion-card-content>
      </ion-card>
    
      <div text-center>
        <circle-progress 
        [hidden] = "hideTeamProgressBar"
        [percent]= "teamProgressBar"
        [radius]="90"
        [outerStrokeWidth]="9"
        [innerStrokeWidth]="5"
        [outerStrokeColor]="'#1ba561'"
        [innerStrokeColor]="'#f99f38'"
        [animation]="true"
        [animationDuration]="500"
        [imageSrc]= "'./assets/pictures/Circle-Team-Photo.png'" 
        [showImage]="true"
        [imageWidth]="153"
        [imageHeight]="153">
        </circle-progress>
        <h3>Your Team's Total Progress</h3>
      </div>
    </ion-grid>
    
    <br>
  </div>

  <div class="whiteBackground">
    <br><br>
    <div class="ion-text-center">
      <h1>Powered By Community</h1>
      <h6>MISSion: Innovation is made possible by grants from the following — </h6>
    </div>

  <br>

<ion-grid> <!--_____________Sponsors Grid______________-->
    <ion-row>
      <ion-col size='4' size-sm>
        <a href="https://www.fcgov.com/">
        <ion-img 
          src="https://i.ibb.co/TLtKFQk/FC-Logo-blue.png" 
          alt="City of Fort Collins" ></ion-img>
          </a>

          <br>

          <a href="https://www.cpt12.org/">
          <ion-img 
            src="https://i.ibb.co/4NTVFYw/cpt12-full-stacked-RGB-1.jpg" 
            alt="Colorado Public Television"></ion-img>
          </a>

      </ion-col>
      <ion-col size='4' size-sm>
        <a href="https://sim-colorado.org/">
        <ion-img
          src="https://i.ibb.co/Gp519wd/SIM-Logo.jpg" 
          alt="SIM-Logo" ></ion-img>
          </a>

          <br> <br>

          <a href="https://www.coloradogives.org/">
          <ion-img
          src="https://i.ibb.co/bd1LrNp/2017-CG-cmyk.jpg" 
          alt="Colorado Gives" ></ion-img>
        </a>

      </ion-col>
      <ion-col size='4' size-sm>
          <a href="https://www.rotary.org/en">
          <ion-img
            src="https://i.ibb.co/fFFZBkn/3366de27c412f66bf005257f1344ee48.jpg" 
            alt="Rotary" ></ion-img>
          </a>

            <br>
            <a href="https://www.wfco.org/">
            <ion-img
          src="https://i.ibb.co/zStJPsY/Women-s-Foundation-cmyk-large-vertical-tag-1.jpg" 
          alt="Women's Foundation of Colorado" ></ion-img>
          </a>
      </ion-col>
    </ion-row>

    <br>

    <div class="ion-text-center">
    <h1>Thank You to Our Sponsors!</h1>
  </div>

  <br>

  <ion-row>
      <ion-col size='4' size-sm>
          <a href="https://toolboxcreative.com/#Game-Changer">
        <ion-img 
          src="https://i.ibb.co/HzqmvHp/grunge-blue-Toolbox.jpg" 
          alt="Toolbox Creative" ></ion-img>
          </a>

          <br>

          <a href="https://csuventures.org/">
          <ion-img
            src="https://i.ibb.co/7tM9knZ/CSUV-jpg.jpg" 
            alt="CSU Ventures" ></ion-img>
          </a>

          <br>

          <a href="https://www.pho-co.com/">
          <ion-img
            src="https://i.ibb.co/9wCjDJj/Phoco-Logo.png" 
            alt="Phoco" ></ion-img>
            </a>

          <br>

          <a href="https://www.natsci.colostate.edu/">
          <ion-img
            src="https://i.ibb.co/Zx5Q02F/Natural-Sciences-csu-2-c357.png" 
            alt="CSU College of Natural Sciences" ></ion-img>
            </a>

      </ion-col>
      <ion-col size='4' size-sm>
          <a href="https://energy.colostate.edu/">
        <ion-img
          src="https://i.ibb.co/HFZJ5ZX/Final-HLogo-CSUlogo-NEW.jpg" 
          alt="CSU Energy Institute" ></ion-img>
          </a>

          <br> 

          <a href="https://www.research.colostate.edu/">
          <ion-img
          src="https://i.ibb.co/p2sjdb5/VPR-csu-2-C357.png" 
          alt="CSU Vice President for Research" ></ion-img>
          </a>

          <br><br><br>

          <a href="https://littlewordsproject.com/">
          <ion-img
          src="https://i.ibb.co/mBQWk7q/Little-Words-Project-Logo-4-C-Web-b19585c3-a60f-4bd4-911f-4c5d9aeae60c-1.png" 
          alt="Little Words Project" ></ion-img>
          </a>

          <br><br><br>

          <a href="http://www.edcarrollmotorco.com/">
          <ion-img
            src="https://i.ibb.co/JsvkHKF/JPEG-logos-without-border-1.jpg" 
            alt="Ed Carrol Motor Company" ></ion-img>
            </a>

      </ion-col>
      <ion-col size='4' size-sm>
          <a href="https://www.natsci.colostate.edu/women-in-natural-sciences-wins/">
          <ion-img
            src="https://i.ibb.co/7r1Y9nf/Women-in-Natural-Sciences-color-1.png" 
            alt="CSU Women in Natural Sciences" ></ion-img>
            </a>

            <br>

            <a href="http://www.sixdogtshirtco.com/">
            <ion-img
              src="https://i.ibb.co/NjvztGh/six-dog-website-logo.png" 
              alt="Six Dog T-shirt Co." ></ion-img>
              </a>

          <br><br>

          <a href="https://www.retailmugs.com/">
          <ion-img
          src="https://i.ibb.co/F0rCPLx/Retail-Mugs-Color-01.png" 
          alt="Retail Mugs" ></ion-img>
          </a>

          <br><br>

          <a href="https://www.engr.colostate.edu/me/">
          <ion-img
            src="https://i.ibb.co/vjp4Hz2/ME-CSU.png" 
            alt="CSU Mechanical Engineering"></ion-img>
            </a>
      </ion-col>
    </ion-row>
  </ion-grid>
    <br>
  </div>

</ion-content>
