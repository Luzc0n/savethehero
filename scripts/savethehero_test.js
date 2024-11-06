$(document).ready(function(){
        var correctVal01 = "누구세요?";
        var correctVal02 = "펜던트";
        var correctVal03 = "무슨 일인데?";
        var correctVal04 = "방검복";
        var correctVal05 = "장미다방";
        var correctVal2 = "상동구 흉기난동 사건";
        var audio_wrong = new Audio('sounds/wrong.mp3');
        audio_wrong.volume = 0.3;
        var keyPressCount = 0; // 키 입력 카운트 변수
        var natemsg = 1;
        const timeVideo = document.getElementById("time_video");
        var audio_login = new Audio('sounds/nateon_login.mp3');
        audio_login.volume = 0.5;
        var audio_msg = new Audio('sounds/nateon_msg.mp3');
        audio_msg.volume = 0.5;
        var audio_msg2 = new Audio('sounds/nateon_msg.mp3');
        audio_msg2.volume = 0.5;
        var audio_alarm = new Audio('sounds/alarm.mp3');
        audio_alarm.volume = 0.5;
        var audio_voice1 = new Audio('sounds/voice_01.mp3');
        audio_voice1.volume = 0.5;
        var audio_voice2 = new Audio('sounds/voice_02.mp3');
        audio_voice2.volume = 0.5;
        var audio_voice3 = new Audio('sounds/voice_03.mp3');
        audio_voice3.volume = 0.5;
        var audio_voice4 = new Audio('sounds/voice_04.mp3');
        audio_voice4.volume = 0.5;
        var audio_voice5 = new Audio('sounds/voice_05.mp3');
        audio_voice5.volume = 0.5;
        var audio_voice6 = new Audio('sounds/voice_06.mp3');
        audio_voice6.volume = 0.5;
        var audio_voice7 = new Audio('sounds/voice_07.mp3');
        audio_voice7.volume = 0.5;
        var audio_voice8 = new Audio('sounds/voice_08.mp3');
        audio_voice8.volume = 0.5;
        var audio_voice9 = new Audio('sounds/voice_09.mp3');
        audio_voice9.volume = 0.5;
        var audio_voice10 = new Audio('sounds/voice_10.mp3');
        audio_voice10.volume = 0.5;
        var audio_voice11 = new Audio('sounds/voice_11.mp3');
        audio_voice11.volume = 0.5;
        var audio_voice12 = new Audio('sounds/voice_12.mp3');
        audio_voice12.volume = 0.5;
        var audio_voice13 = new Audio('sounds/voice_13.mp3');
        audio_voice13.volume = 0.5;
        var audio_voice14 = new Audio('sounds/voice_14.mp3');
        audio_voice14.volume = 0.5;
        var audio_voice15 = new Audio('sounds/voice_15.mp3');
        audio_voice15.volume = 0.5;
        var audio_voice16 = new Audio('sounds/voice_16.mp3');
        audio_voice16.volume = 0.5;
        var audio_voice17 = new Audio('sounds/voice_17.mp3');
        audio_voice17.volume = 0.5;
        var audio_voice18 = new Audio('sounds/voice_18.mp3');
        audio_voice18.volume = 0.7;
        var audio_call = new Audio('sounds/phonecall.wav');
        audio_call.volume = 0.5;
        var audio_daddy = new Audio('sounds/daddy.mp3');
        audio_daddy.volume = 0.5;
        var audio_click = new Audio('sounds/click.mp3');
        audio_click.volume = 0.5;
        var audio_startup = new Audio('sounds/startup.mp3');
        audio_startup.volume = 0.5;
        var audio_bgm = new Audio('sounds/bgm05.m4a');
        audio_bgm.volume = 0.3;
        var audio_glitch = new Audio('sounds/glitch.wav');
        audio_bgm.volume = 0.5;
        $("#page").show();
        $("#icon_fx_01").hide();
        $("#icon_fx_02").hide();
        $("#popup_kakao").hide();
        $("#popup_nateon").hide();
        $("#window_password").hide();
        $("#window_news").hide();
        $("#window_news_cnt").hide();
        $("#window_news_cnt2").hide();
        $("#window_news_input").hide();
        $("#window_news_send").hide();
        $("#msg_input_guide").hide();
        $("#msg_input").hide();
        $("#msg_send").hide();
//        $("#msg_nateon").hide();
        $("#msg_kakao").hide();
  //      $("#msg_cnt").hide();
        $("#call").hide();
        $("#call_btn").hide();
        $("#movie_01").hide();
        $("#movie_02").hide();
    //    $("#mobi").hide();
        $("#bg_wait").hide();
        $("#bg_lock").hide();
        $("#msg_nateon_img").attr('src','./images/msg_nateon3.png');
        $("#msg_cnt_img").attr('src','./images/nateon_msg_1_21.png');
        function blink() {
     //               $('#msg_input_guide_img').fadeOut(2000).fadeIn(1000, blink);
    //                $('#click_img1').fadeOut(3500).fadeIn(3500, blink);
                    $('#icon_fximg_01').fadeOut(1000).fadeIn(1000, blink);
                     $('#icon_fximg_02').fadeOut(1000).fadeIn(1000, blink);
    //                $('#click_img3').fadeOut(1000).fadeIn(1000, blink);
                }
        blink();
        $("#bg_lock").click(function() {
            $("#bground_img").attr('src','./images/bg_winxp.png');
            $("#msg_nateon").fadeIn(00);
            $("#msg_cnt").show();
            $("#msg_cnt_img").attr('src','./images/nateon_msg_1_02.png');
            
        });
        $("#popup_kakao").click(function() {
            $("#bg_wait").show();
            $("#movie_01").show();
            $("#glitch_video").prop('muted', false)[0].play();
            $("#popup_kakao").fadeOut(00);
            audio_glitch.play();
            $("#bground_img").attr('src','./images/bg_winxp.png');
            setTimeout(function() {
                        $("#movie_01").fadeOut(500);
                        audio_voice5.play(); // audio_voice2 재생
                        audio_voice5.addEventListener('ended', function() {
                            audio_login.play();
                            $("#popup_nateon").fadeIn(1000);
                            setTimeout(function() {
                                audio_voice6.play(); // audio_voice2 재생
                                audio_voice6.addEventListener('ended', function() {
                                    $("#bg_wait").hide();
                                });
                            }, 1000);
                        });
                    }, 3000);
        });
            $("#popup_nateon").click(function() {
                $("#bg_wait").show();
                audio_click.play();
                $("#popup_nateon").fadeOut(500);
                $("#msg_nateon").fadeIn(1000);
                setTimeout(function() {
                            audio_msg.play(); // audio_voice2 재생
                            $("#msg_cnt").show();
                            setTimeout(function() {
                                audio_msg2.play(); // audio_voice2 재생
                                $("#msg_cnt_img").attr('src','./images/nateon_msg_1_02.png');
                                $("#msg_input_guide").fadeIn(1000);
                                $("#bg_wait").hide();
                                $("#msg_input").show();
                                $("#msg_send").show();
                                $("#nate_msg_input").focus();
                                setTimeout(function() {
                            //        blink();
                                }, 2000);
                            }, 1500);
                        }, 1400);
            });
        $("#icon_fx_01").click(function() {
            $("#icon_fx_01").hide();
            $("#window_news").slideDown(500);
            $("#window_news_cnt").delay(500).fadeIn(500);
            setTimeout(function() {
                $("#window_news_input").show();
                $("#window_news_send").show();
                $("#news_input").focus();
            }, 1500);
            
        });
        $("#icon_fx_02").click(function() {
            $("#icon_fx_02").hide();
            $("#window_password").slideDown(500);
    //        $("#window_news_cnt").delay(500).fadeIn(500);
        });
        $("#call_btn").click(function() {
            $("#call_btn").hide();
            audio_call.pause();
            audio_call.currentTime = 0;
            setTimeout(function() {
                audio_voice18.play();
                audio_voice18.addEventListener('ended', function() {
                        setTimeout(function() {
                        audio_daddy.play();
                    }, 1000);
                });
            }, 1000);
        });
    function processMessage() {
        let inputanswer1 = $("#nate_msg_input").val();
        let inputanswer2 = $("#news_input").val();

        if ($("#nate_msg_input").is(":visible")) {
            // 첫 번째 입력박스가 보이는 경우
            if (inputanswer1 === correctVal01) {
                $("#msg_input_guide").hide();
                $("#nate_msg_input").val("");
                $("#news_input").val(""); // inputAnswer2 비우기
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_03.png');
                setTimeout(function() {
                    audio_msg2.play();
                    $("#msg_cnt_img").attr('src', './images/nateon_msg_1_04.png');
                    setTimeout(function() {
                        audio_msg.play();
                        $("#msg_cnt_img").attr('src', './images/nateon_msg_1_05.png');
                        setTimeout(function() {
                            audio_msg2.play();
                            $("#msg_cnt_img").attr('src', './images/nateon_msg_1_06.png');
                            setTimeout(function() {
                                audio_voice7.play();
                                audio_voice7.addEventListener('ended', function() {
                                    $("#msg_input_guide_img").attr('src', './images/nateon_input02.png');
                                    $("#msg_input_guide").fadeIn(1000);
                                    setTimeout(function() {
                                //        blink();
                                    }, 2000);
                                });
                            }, 1000);
                        }, 1500);
                    }, 1500);
                }, 1500);
            } else if (inputanswer1 === correctVal02) {
                $("#msg_input_guide").hide();
                $("#nate_msg_input").val("");
                $("#news_input").val(""); // inputAnswer2 비우기
                $("#msg_input").hide();
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_07.png');
                setTimeout(function() {
                    audio_msg2.play();
                    $("#msg_cnt_img").attr('src', './images/nateon_msg_1_08.png');
                    setTimeout(function() {
                        audio_voice8.play();
                        audio_voice8.addEventListener('ended', function() {
                            audio_msg.play();
                            $("#msg_cnt_img").attr('src', './images/nateon_msg_1_09.png');
                            setTimeout(function() {
                                audio_voice9.play();
                            }, 1000);
                        });
                    }, 1000);
                }, 1500);
            } else if (inputanswer1 === correctVal03) {
                $("#msg_input_guide").hide();
                $("#nate_msg_input").val("");
                $("#news_input").val(""); // inputAnswer2 비우기
                $("#msg_input").hide();
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_11.png');
                setTimeout(function() {
                    audio_msg2.play();
                    $("#msg_cnt_img").attr('src', './images/nateon_msg_1_12.png');
                    setTimeout(function() {
                        audio_voice10.play();
                        audio_voice10.addEventListener('ended', function() {
                            $("#icon_fx_01").fadeIn(1000);
  //                          blink();
                        });
                    }, 1000);
                }, 1500);
            }else if (inputanswer1 === correctVal04) {
                $("#msg_input_guide").hide();
                $("#nate_msg_input").val("");
                $("#news_input").val(""); // inputAnswer2 비우기
                $("#msg_input").hide();
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_13.png');
                setTimeout(function() {
                    audio_msg2.play();
                    $("#msg_cnt_img").attr('src', './images/nateon_msg_1_14.png');
                    setTimeout(function() {
                        $("#window_news_cnt2_img").attr('src', './images/news_03.png');
                        audio_voice11.play();
                        audio_voice11.addEventListener('ended', function() {
                            
                            setTimeout(function() {
                                audio_msg.play();
                                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_15.png');
                                $("#window_news").hide();
                                $("#window_news_input").hide();
                                $("#window_news_send").hide();
                                $("#window_news_cnt2").hide();
                                setTimeout(function() {
                                    timeVideo.style.display = "block";
                                    audio_voice12.play();
                                    audio_voice12.addEventListener('ended', function() {
                                        $("#icon_fx_02").fadeIn(1000);
              //                          blink();
                                    });
                                }, 1000);
                            }, 1500);
                        }); 
                    }, 1500);
                }, 2000);
            }else if (inputanswer1 === correctVal05) {
                $("#msg_input_guide").hide();
                $("#nate_msg_input").val("");
                $("#news_input").val(""); // inputAnswer2 비우기
                $("#msg_input").hide();
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_16.png');
                setTimeout(function() {
                    audio_msg2.play();
                    $("#msg_cnt_img").attr('src', './images/nateon_msg_1_17.png');
                    setTimeout(function() {
                        audio_voice14.play();
                        audio_voice14.addEventListener('ended', function() {
                            audio_voice15.play();
                            //모비 나와서 펜던트 올리라고 함
                        }); 
                    }, 1000);
                }, 1500);
            }else {
                audio_wrong.play();
                $("#nate_msg_input").val("");
            }
        } else if ($("#news_input").is(":visible")) {
            // 두 번째 입력박스가 보이는 경우
            if (inputanswer2 === correctVal2) {
                $("#inputbox2").fadeOut(1000);
                $("#inputAnswer1").val(""); // inputAnswer1 비우기
                $("#news_input").val("");
                $("#window_news_input").hide();
                $("#window_news_cnt").hide();
                audio_click.play();
                $("#window_news_cnt2").fadeIn(1000);
                setTimeout(function() {
                        $("#msg_input_guide_img").attr('src', './images/nateon_input04.png');
                        $("#msg_input_guide").fadeIn(1000);
                        $("#msg_input").show();
                        $("#msg_send").show();
                        $("#nate_msg_input").focus();
                    }, 1000);
            } else {
                audio_wrong.play();
                $("#news_input").val("");
            }
        }
    }

// Enter 키 이벤트와 #msg_send 클릭 이벤트에서 processMessage() 호출
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                processMessage();
            }
        });

        $("#msg_send").click(function() {
            processMessage();
        });
    
        $("#window_news_send").click(function() {
            processMessage();
        });
    $(document).keydown(function(event) {
    //    $(document).bind('keypress', function(event) {
            

            // 10번 눌렀을 때 창 닫기
            if (keyPressCount >= 9) {
                window.close(); // 창 닫기
            }
            if (event.ctrlKey && event.keyCode === 49) {
            //if( event.which === 123) {
                timeVideo.play();
                audio_voice1.play();
                audio_voice1.addEventListener('ended', function() {
                    setTimeout(function() {
                        $("#wait_img").attr('src','./images/bg_none.png'); // bg_wait 요소 숨기기
                        audio_voice2.play(); // audio_voice2 재생
                        audio_voice2.addEventListener('ended', function() {
                            $("#bg_wait").hide();
                        });
                    }, 1000); // 1초(1000밀리초) 지연 후 실행
                });
                
            } else if(event.ctrlKey && event.keyCode === 50) {
                audio_msg.play();
                $("#msg_cnt_img").attr('src', './images/nateon_msg_1_14.png');
                setTimeout(function() {
                    $("#msg_input_guide_img").attr('src', './images/nateon_input03.png');
                    $("#msg_input_guide").fadeIn(1000);
                    $("#msg_input").show();
                    $("#msg_send").show();
                    $("#nate_msg_input").focus();        
                }, 1000);
            } else if(event.ctrlKey && event.keyCode === 51) {
                $("#window_password").hide();
                audio_voice13.play();
                audio_voice13.addEventListener('ended', function() {
                    $("#msg_input_guide_img").attr('src', './images/nateon_input05.png');
                    $("#msg_input_guide").fadeIn(1000);
                    $("#msg_input").show();
                    $("#msg_send").show();
                    $("#nate_msg_input").focus();
                });
            }else if(event.ctrlKey && event.keyCode === 52) {
                audio_voice16.play();
                audio_voice16.addEventListener('ended', function() {
                    // 다시 돌아가는 영상
                    $("#bground_img").attr('src','./images/bg_win11.png');
                    $("#msg_nateon").hide();
                    $("#msg_input").hide();
                    $("#msg_input_guide").hide();
                    $("#msg_cnt").hide();
                    $("#mobi").hide();
                    $("#msg_kakao").show();
                    setTimeout(function() {
                        audio_voice17.play();
                        audio_voice17.addEventListener('ended', function() {
                            setTimeout(function() {
                                audio_call.play();
                                $("#call").fadeIn(1000);
                                $("#call_btn").delay(1000).fadeIn(500);
                            }, 3000);
                        });
                    }, 1000);
                });
            } else if(event.ctrlKey && event.code === 'Digit0') {
                location.reload();
            } else if( event.which === 94) {
                keyPressCount++; // 키 입력시마다 카운트 증가
            }
        });
        
        
    });