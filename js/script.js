
//создаем танк прототип
var tankProto={
Hp:3,
Dammege:3,
spead:200
};

//создаем объекты танков
var tank1 = Object.create(tankProto);
tank1.position={
	x:0,
	y:300
};

var tank2 = Object.create(tankProto); //в этой строчке мы наследуем от TankProto 
tank2.position={
	x:0,
	y:100
};


var tank3 = Object.create(tankProto);//и в этой
tank3.position={
	x:0,
	y:0
};


//это наш танк
var SoloTankOb = Object.create(tankProto);//и в этой )))
SoloTankOb.position={
	x:0,
	y:0
};
var FrontBattle = document.getElementById('Pole');
var FrontBorder = FrontBattle.getBoundingClientRect();
var arrtank = [tank1,tank2,tank3,]; //Масив из танков для работы в сет интервале

setInterval(function () {
 	
	
	//находим тоже и у танков
	var MinTankPosition = MinTank.getBoundingClientRect();
	var AVGTankPosition = AvgTank.getBoundingClientRect();
	var MaxTankPosition = MaxTank.getBoundingClientRect();
	var OnceTankPosition = OnceTank.getBoundingClientRect();
	//выбераем танк генерируя рандомное число от 0 до 3 
 	var tankSelection = Math.random()*(0 + 2);
  	tankSelection = Math.round(tankSelection);
  	
	if (tankSelection==0) {


		let direction = Math.random();
		direction = Math.round(direction);

		if(direction==0){

			let directionFoX = Math.random();
			directionFoX = Math.round(directionFoX);

		  	if(directionFoX==0 && FrontBorder.left + 60 <= MinTankPosition.left){
		  		
				arrtank[tankSelection].position.x-=30;
				MinTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				MinTank.className='EnemyTankLeft';
		 	}

		 	if(directionFoX==1 && FrontBorder.right - 60>=MinTankPosition.right){
			  	arrtank[tankSelection].position.x+=30;
			  	MinTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MinTank.className='EnemyTankRight';
			}	
		}

		if (direction==1) {

			let directionFoY = Math.random();
			directionFoY = Math.round(directionFoY);


		  	if(directionFoY==0 && FrontBorder.top + 60 <=MinTankPosition.top){	  
				arrtank[tankSelection].position.y-=30;
			  	MinTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MinTank.className='EnemyTankTop';
		  	}
		  	if(directionFoY==1 && FrontBorder.bottom - 60 >=MinTankPosition.bottom){
			  arrtank[tankSelection].position.y+=30;
			  MinTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  MinTank.className='EnemyTankBottom';
		  	}
		}
	}

  	if (tankSelection==1) {
  		
  		let direction = Math.random();
  		direction = Math.round(direction);

  		if(direction==0){
  			let directionFoX = Math.random();
			directionFoX = Math.round(directionFoX);

			if(directionFoX==0 && FrontBorder.left + 60<=AVGTankPosition.left){
  					arrtank[tankSelection].position.x-=30;
				  	AvgTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				  	AvgTank.className='EnemyTankLeft';
			}
			if(directionFoX==1 && FrontBorder.right - 60 >=AVGTankPosition.right){
				arrtank[tankSelection].position.x+=30;
				AvgTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				AvgTank.className='EnemyTankRight';
			}
				  
  		}
  		if (direction==1) {
  			let directionFoY = Math.random();
			directionFoY = Math.round(directionFoY);

			if(directionFoY==0 && FrontBorder.top + 60 <=AVGTankPosition.top){	  
  				arrtank[tankSelection].position.y-=30;
				AvgTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				AvgTank.className='EnemyTankTop';
			}if(directionFoY==1&& FrontBorder.bottom - 60 >=AVGTankPosition.bottom){
				arrtank[tankSelection].position.y+=30;
				AvgTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				AvgTank.className='EnemyTankBottom';
			}
  		}
  	}

  	if (tankSelection==2) {
  		
		let direction = Math.random();
		direction = Math.round(direction);

		if(direction==0){

			let directionFoX = Math.random();
			directionFoX = Math.round(directionFoX);

		  	if(directionFoX==0 && FrontBorder.left + 60 <=MaxTankPosition.left){
				arrtank[tankSelection].position.x-=30;
				MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				MaxTank.className='EnemyTankLeft';
		 	}

		 	if(directionFoX==1 && FrontBorder.right - 60 >=MaxTankPosition.right){
			  	arrtank[tankSelection].position.x+=30;
			  	MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MaxTank.className='EnemyTankRight';
			}	
		}

		if (direction==1) {

			let directionFoY = Math.random();
			directionFoY = Math.round(directionFoY);


		  	if(directionFoY==0 && FrontBorder.top + 60 <=MaxTankPosition.top){	  
				arrtank[tankSelection].position.y-=30;
			  	MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MaxTank.className='EnemyTankTop';
		  	}
		  	if(directionFoY==1 && FrontBorder.bottom - 60 >=MaxTankPosition.bottom){
			  arrtank[tankSelection].position.y+=30;
			  MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  MaxTank.className='EnemyTankBottom';
		  	}
		}
	}
	if (tankSelection==3) {
		let direction = Math.random();
		direction = Math.round(direction);

		if(direction==0){

			let directionFoX = Math.random();
			directionFoX = Math.round(directionFoX);

		  	if(directionFoX==0 && FrontBorder.left + 60 <=MaxTankPosition.left){
				arrtank[tankSelection].position.x-=30;
				MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
				MaxTank.className='EnemyTankLeft';
		 	}

		 	if(directionFoX==1 && FrontBorder.right - 60 >=MaxTankPosition.right){
			  	arrtank[tankSelection].position.x+=30;
			  	MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MaxTank.className='EnemyTankRight';
			}	
		}

		if (direction==1) {

			let directionFoY = Math.random();
			directionFoY = Math.round(directionFoY);


		  	if(directionFoY==0 && FrontBorder.top + 60 <=MaxTankPosition.top){	  
				arrtank[tankSelection].position.y-=30;
			  	MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  	MaxTank.className='EnemyTankTop';
		  	}
		  	if(directionFoY==1 && FrontBorder.bottom - 60 >=MaxTankPosition.bottom){
			  arrtank[tankSelection].position.y+=30;
			  MaxTank.style.cssText= "transform: translate("+arrtank[tankSelection].position.x+'%'+", "+arrtank[tankSelection].position.y+'%'+");";
			  MaxTank.className='EnemyTankBottom';
		  	}
		}
	}
 }, tankProto.spead);


setInterval(function(){

	var SoloTankPosition =  SoloTank.getBoundingClientRect();

	window.onkeyup = function(){
		var keyCodes = event.keyCode;
		if (keyCodes == 40) {
				SoloTankOb.position.y+=30;
				SoloTank.style.cssText= "transform: translate("+SoloTankOb.position.x+'%'+", "+SoloTankOb.position.y+'%'+");";
				SoloTank.className='EnemyTankBottom';
			}	if (keyCodes == 38) {
				SoloTankOb.position.y-=30;
				SoloTank.style.cssText= "transform: translate("+SoloTankOb.position.x+'%'+", "+SoloTankOb.position.y+'%'+");";
				SoloTank.className='EnemyTankTop';
			}
			if (keyCodes == 39) {
				SoloTankOb.position.x+=30;
				SoloTank.style.cssText= "transform: translate("+SoloTankOb.position.x+'%'+", "+SoloTankOb.position.y+'%'+");";
				SoloTank.className='EnemyTankRight';
			}
			if (keyCodes == 37) {
				SoloTankOb.position.x-=30;
				SoloTank.style.cssText= "transform: translate("+SoloTankOb.position.x+'%'+", "+SoloTankOb.position.y+'%'+");";
				SoloTank.className='EnemyTankLeft';
			}
	}
	
}, SoloTankOb.spead);

window.onclick = function(){
	var SoloTankPosition =  SoloTank.getBoundingClientRect();
	if (SoloTank.className == 'EnemyTankLeft'){
		let bullet = document.createElement('span');
		bullet.className = 'shotLeft';
		bullet.style.left = SoloTankOb.position.x + "px";
		bullet.style.top = (SoloTankOb.position.y)+(SoloTankPosition.height/2) + "px";
		FrontBattle.appendChild(bullet);
		setInterval(function () {
			var bulletPosition = bullet.style.left;
			var count = parseInt(bulletPosition,10);
			count -= 30;
			bullet.style.left = count + 'px';
		},50);

	}
	if (SoloTank.className == 'EnemyTankRight'){
		let bullet = document.createElement('span');
		bullet.className = 'shotRight';
		bullet.style.left = (SoloTankOb.position.x)+(SoloTankPosition.width) + "px";
		bullet.style.top = (SoloTankOb.position.y)+(SoloTankPosition.height/2) + "px";
		FrontBattle.appendChild(bullet);
		setInterval(function () {
			var bulletPosition = bullet.style.left;
			var count = parseInt(bulletPosition,10);
			count += 30;
			bullet.style.left = count + 'px';
		},50);

	}
	if (SoloTank.className == 'EnemyTankTop'){
		let bullet = document.createElement('span');
		bullet.className = 'shotTop';
		bullet.style.left = (SoloTankOb.position.x)+(SoloTankPosition.width/2) + "px";
		bullet.style.top = (SoloTankOb.position.y) + "px";
		FrontBattle.appendChild(bullet);
		setInterval(function () {
			var bulletPosition = bullet.style.top;
			var count = parseInt(bulletPosition,10);
			count -= 30;
			bullet.style.top = count + 'px';
		},50);
	}
	if (SoloTank.className == 'EnemyTankBottom'){
		let bullet = document.createElement('span');
		bullet.className = 'shotBottom';
		bullet.style.left = (SoloTankOb.position.x)+(SoloTankPosition.width/2) + "px";
		bullet.style.top = (SoloTankOb.position.y) + (SoloTankPosition.height) + "px";
		FrontBattle.appendChild(bullet);
		setInterval(function () {
			var bulletPosition = bullet.style.top;
			var count = parseInt(bulletPosition,10);
			count += 30;
			bullet.style.top = count + 'px';
		},50);
	}
}