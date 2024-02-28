

		/***
		
		* 时钟:
		
		* 1> 旋转: rotate(90deg)
		
		* 2> 旋转中心点: transform-origin
		
		* */
		
		//TODO step1: 获取时钟的指针
		
		var hour = document.getElementById('hour');//时针
		
		var minute = document.getElementById('minute');//分针
		
		var second = document.getElementById('second');//秒针
		
		var myClock = document.getElementById('clock');//时钟
		
		
		
		//TODO step2: 获取当前时间,把指针放在正确的位置
		
		function clock(){
		
		var date = new Date();//获取当前时间
		
		//时(0-23) 分(0-59)秒(0-59)
		
		//计算转动角度
		
		var hourDeg = date.getHours()*360/12;
		
		var minuteDeg = date.getMinutes()*360/60;
		
		var secondDeg = date.getSeconds()*360/60;
		
		//console.log(hourDeg, minuteDeg, secondDeg);
		
		//设置指针
		
		hour.style.transform = 'rotate('+hourDeg+'deg)';
		
		minute.style.transform = 'rotate('+minuteDeg+'deg)';
		
		second.style.transform = 'rotate('+secondDeg+'deg)';
		
		}
		
		//初始化执行一次
		
		clock();
		
		//TODO step3: 设置定时器
		
		setInterval(clock,1000);
		
		
		
		/***
		
		* 圆半径坐标计算：
		
		* x = pointX + r*cos(angle);
		
		* y = pointY + r*sin(angle);
		
		* */
		
		var pointX = 200;
		
		var pointY = 200;
		
		var r = 150;
		
		//TODO step4: 画时钟数字
		
		function drawNumber(){
		
		var deg = Math.PI*2/12;//360°
		
		for (var i = 1; i <= 12; i++) {
		
		//计算每格的角度
		
		var angle = deg*i;
		
		//计算圆上的坐标
		
		var x = pointX + r*Math.cos(angle);
		
		var y = pointY + r*Math.sin(angle);
		
		//创建div,写入数字
		
		var number = document.createElement('div');
		
		number.className = 'number';
		
		number.innerHTML = i;
		
		//减去自身的一半, 让div的中心点在圆弧上
		
		number.style.left = x - 25 + 'px';
		
		number.style.top = y - 25 + 'px';
		
		//添加到页面
		
		myClock.appendChild(number);
		
		}
		
		}
		
		drawNumber();
		
		