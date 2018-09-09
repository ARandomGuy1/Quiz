$(document).ready(function(){
	$("#start").click(function(){
		$("#1Question").show();
		$("#1QuestionP").show();
		$("#start").hide();
	})
	
	$("#next").click(function(){
		$("#1Question").hide();
		$("#1QuestionP").hide();
		$("#2Question").show();
		$("#2QuestionP").show();
		$("#next").hide();
		$("#next1").show();
	})
	
	$("#next1").click(function(){
		$("#2Question").hide();
		$("#2QuestionP").hide();
		$("#3Question").show();
		$("#3QuestionP").show();
		$("#next1").hide();
		$("#next2").show();
	})
	
	$("#next2").click(function(){
		$("#3Question").hide();
		$("#3QuestionP").hide();
		$("#4Question").show();
		$("#4QuestionP").show();
		$("#next2").hide();
		$("#next3").show();
	})
	
	$("#next3").click(function(){
		$("#4Question").hide();
		$("#4QuestionP").hide();
		$("#5Question").show();
		$("#5QuestionP").show();
		$("#next3").hide();
		$("#next4").show();
	})
	
	$("#next4").click(function(){
		$("#5Question").hide();
		$("#5QuestionP").hide();
		$("#6Question").show();
		$("#6QuestionP").show();
		$("#next4").hide();
		$("#next5").show();
	})
	
})
