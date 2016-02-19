#TweenMax 初探
###得到动画实例
     new TimeLineMax()
     
     
###To() :添加动画
	可接受4个参数
	参数说明：
		1:元素选择器或对象
		2：持续时间
		3：对象
			key:value
		4:动画延迟发生时间（可选，单位秒）：
		  可写数字或“+=0.5”、“-=0.5”(推荐用字符串表达式)
例：

		<style>
		#demo1 {
			position:absolute;
			top:0;
			left:0;
			width:100px;
			height:100px;
		}
		</style>
		
		<div id='demo1'></div>
		<script>
			$(function(){
                var t = new TimeLineMax();
                //同时进行
                t.to('#demo1',1,{width:200px,left:200px})
                //依次进行
                t.to('#demo1',1,{width:200px});
                t.to('#demo1',2,{left:200px});

			})
		</script>
## 动画方法

stop()：停止动画
	
	$('#stop').click(function(){
		t.stop();
	})

play()：开始动画

	$('play').click(function(){
		t.play();
	})

reverse()：反向开始动画

onComplete()：运动结束后触发对应的函数
		
onReverseComplete()：反向运动结束后触发对应的函数
		