var yan={
    alert:{
        confrim:function (OPTION,okFn,cancelFn) {
            if($('.yanConfrim').length>0)$('.yanConfrim').remove();

            var str='<div class="yanConfrim"> ' +
                '       <div class="yanCOnfrimMask"></div> ' +
                '       <div class="yanConfrimBox"> ' +
                '           <div class="yanConfrimTitle"> ' +
                '               <h3>消息</h3> ' +
                '               <span><a href="javascript:;" class="cancelBtn"></a></span> ' +
                '           </div> ' +
                '           <div class="yanConfrimBody"> ' +
                '               <p>'+OPTION.text+'</p> ' +
                '           </div> ' +
                '           <div class="yanConfrimFoot"> ' +
                '               <a class="okBtn" href="javascript:;">'+OPTION.btn[0]+'</a> ' +
                '               <a class="cancelBtn" href="javascript:;">'+OPTION.btn[1]+'</a> ' +
                '           </div> ' +
                '       </div> ' +
                '   </div>';
            $('body').append(str);
            $('.yanConfrim').show();
            $('body .yanConfrim .okBtn').click(function () {
                okFn && okFn(function () {
                    if($('.yanConfrim').length>0)$('.yanConfrim').remove();
                });
            });
            $('body .yanConfrim .cancelBtn').click(function () {
                if($('.yanConfrim').length>0)$('.yanConfrim').remove();
                cancelFn && cancelFn();
            });

        }
    }
}