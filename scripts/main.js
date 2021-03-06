function updateAttr(pos,attr){
	firebase.database().ref('名單/' + pos).push(attr);	
};
$(document).ready(function(){
	var gender = "男";
	var dp="中文";
	var config = {
    		apiKey: "",
    		authDomain: "",
    		databaseURL: "",
    		storageBucket: "",
	};
	firebase.initializeApp(config);
	$("#Radios1").click(function(){
		gender = "男";
	});
	$("#Radios2").click(function(){
		gender = "女";
	});
	$("#cl-f").click(function(){
		dp = "中文";
	});
	$("#im-f").click(function(){
		dp = "資管";
	});
	$("#enroll").validate({
		messages:{
			name:{required:"此欄位為必填。"},
			inputEmail3:{required:"此欄位為必填。",email:"請輸入有效的Email。"},
			inputPassword3:{required:"此欄位為必填。"},
			birthday:{required:"此欄位為必填。",dateISO:"請輸入有效的日期。"},
			phone:{required:"此欄位為必填。"},
			relation:{required:"此欄位為必填。"},
			size:{required:"此欄位為必填。"},
			dine:{required:"此欄位為必填。"},
			emergency:{required:"此欄位為必填。"},
			emergencyphone:{required:"此欄位為必填。"},
		},
		rules: {
      		name: {required: true},
      		inputEmail3: {required: true,email:true},
      		inputPassword3: {required: true},
			birthday: {required: true,dateISO:true},
			phone: {required: true,digits:true},
			relation: {required: true},
			size: {required: true},
			dine: {required: true},
			emergency: {required: true},
			emergencyphone: {required: true,digits:true}
		},
		submitHandler: function() {
			alert( "報名已截止。" );
    			}
	});
	$("#tg").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#anchor1").offset().top-50
    		},1200,'easeOutBounce');
	});
});




