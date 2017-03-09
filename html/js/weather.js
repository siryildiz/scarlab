var myScroll = null;




function init() {
  function dotChange(no){
    $(".dot").removeClass('selected');
    $(".dot").eq(no).addClass('selected');
    //
      console.log(no);
      $(".forecast").removeClass('selected').hide();
      $(".forecast").eq(no).addClass('selected').show();
    //
    myScroll.scrollToPage(no);
  }

  $("#dots .dot").on("click", function(){
    var no = $(this).index();
    dotChange(no-1);
  })

    $(document).keyup(function(event) {
        var pageCount = $(".forecast").length-1;
        var currentPage = myScroll.currPageX;
        if (event.which == 39){ // right-arrow
            // işlem: şu anki sayfa, ileri gidilecek sayfa; şu anki sayfaya +1 ekle ve sonuç toplamdan büyükse elleme 
            if((currentPage + 1) <= pageCount){
                dotChange(currentPage+1);
            }
        }else if (event.which == 37){ // left-arrow
            // işlem: şu anki sayfa, geri gidilecek sayfa; şu anki sayfaya -1 çıkar ve 0'dan büyükse elleme 
            if((currentPage - 1) >= 0){
                dotChange(currentPage-1);
            }

        }

    });

  $(document.body).addClass((window.cordova !== undefined) ? 'mobile' : 'not-mobile');


  myScroll = new iScroll('wrapper', {
    snap: true,
    bounce: true,
    momentum: false,
    hScroll: true,
    useTransition: true,
    vScroll: false,
    hScrollbar: false,
    vScrollbar: false,
    onScrollEnd: function () {
      //dotChange(this.currPageX);

    },
    onTouchEnd: function () {
      dotChange(this.currPageX);
    },
    onScrollStart: function(){
      $(".forecast").show();
    }
  });

}

if (typeof cordova !== 'undefined') {
  document.addEventListener("deviceready", init);
} else {
  $(document).ready(init);
}

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
