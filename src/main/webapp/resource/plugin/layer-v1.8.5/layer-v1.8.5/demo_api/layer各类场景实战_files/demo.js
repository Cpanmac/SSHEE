/* 

 hello demo 

*/


;!function(){

var conf = {
    ie6: !-[1,] && !window.XMLHttpRequest,
    win: $(window),
    anode: $('.layer_first>a'),
    
    //��ȡhost
    hosts: 'http://' + location.host + '/'
};

//��������
conf.anode.each(function(index){
    var othis = $(this);
    othis.on('click', function(e){
        switch(index){
            case 0:
                layer.alert('�ײ˼���ǰ�˹���ʦ����', 8, '��ȷ��������ʾ', function(){
                    layer.msg('ǰ�˹���ʦ����', 1, -1, function(){
                        layer.msg('Hi��I am here!',3 , {
                            type:9, 
                            rate: 'bottom', 
                            shade: [0]
                        });
                    });
                });
            break;
            case 1:
                $.layer({
                    shade: [0],
                    area: ['auto','auto'],
                    dialog: {
                        msg: '������ο���ǰ�˿�����',
                        btns: 2,                    
                        type: 4,
                        btn: ['��Ҫ','����'],
                        yes: function(){
                            layer.msg('��Ҫ', 1, 1);
                        }, no: function(){
                            layer.msg('����', 1, 13);
                        }
                    }
                });
            break;
            case 2:
                $.layer({
                    type: 1,
                    shade: [0],
                    area: ['auto', 'auto'],
                    title: false,
                    border: [0],
                    page: {dom : '.layer_notice'},
                    close: function(index){
                        layer.close(index);
                        $('.layer_notice').show();
                    }
                });
            break;
            case 3:
                var iss, fnpop = function(obj, call){
                    obj = obj || {};
                    var pageii = $.layer({
                        type: 1,
                        title: false,
                        area: obj.area ? [obj.area[0]+'px', obj.area[1]+'px'] : ['200px', '200px'],
                        offset: ['40px', ''],
                        border: [0], //ȥ��Ĭ�ϱ߿�
                        shade: [0], //ȥ������
                        fix: obj.fix,
                        closeBtn: [0, false], //ȥ��Ĭ�Ϲرհ�ť
                        shift: obj.shift || ['bottom', 300, 1],
                        page: {
                            html: '<div style="width:'+ (obj.area ? obj.area[0]-40 : 160) +'px; height:'+ (obj.area ? obj.area[1]-40 : 160) +'px; padding:20px; background-color:#eee;"><p>�Ҵ�'+ (obj.where || '��') +'���������Զ��˷��</p><button class="pagebtn btns" >�ر�</button></div>'
                        }, success: function(elem){
                            elem.find('.pagebtn').on('click', function(){
                                layer.close(pageii);
                                call && call();
                            });
                        }
                    });
                    return pageii;
                };
                fnpop({
                    shift: 'left',
                    area: [600, 300],
                    fix: true,
                    where: '��'
                }, function(){
                    return
                    $('html, body').stop().animate({scrollTop: $('#ad336').offset().top}, 500, function(){
                        setTimeout(function(){
                            iss || fnpop({fix: false});
                            iss = true;
                        }, 100);
                        
                    });
                });
                
            break;
            case 4:
                $.layer({
                    type: 2,
                    shadeClose: true,
                    title: false,
                    closeBtn: [0, false],
                    shade: [0.8, '#000'],
                    border: [0],
                    offset: ['20px',''],
                    area: ['1000px', ($(window).height() - 50) +'px'],
                    iframe: {src: 'http://f2e.sentsin.com/chat'}
                }); 
            break;
            case 5:
                layer.tips('5������½Ǵ����Զ��رգ�������һ���µ�iframe', this, {
                    time: 5,
                    maxWidth: 260
                });
                $.layer({
                    type: 2,
                    closeBtn: false,
                    shadeClose: true,
                    shade: [0.1, '#fff'],
                    border: [0],
                    time: 5,
                    iframe: {
                        src: 'test/guodu.html'
                    },
                    title: false,
                    area: ['300px','250px'],
                    shift: 'right-bottom',
                    end: function(){
                        $.layer({
                            type : 2,
                            title: '֧��layer',
                            shadeClose: true,
                            maxmin: true,
                            fix : false,  
                            area: ['1024px', '500px'],                     
                            iframe: {
                                src: 'http://item.taobao.com/item.htm?id=37295654589'
                            } 
                        });
                    }
                });
                
            break;
            case 6:
                layer.load(3);
            break;
            case 7:
                layer.load('���ش�����', 3);
            break;
            case 8:
                layer.tips('tips����ʽ�����ǹ̶��ģ������Զ�����ۡ�', this, {
                    style: ['background-color:#78BA32; color:#fff', '#78BA32'],
                    maxWidth:185,
                    time: 3,
                    closeBtn:[0, true]
                });
            break;
            case 9:
                layer.tips('Ĭ��û�йرհ�ť', this , {guide: 1, time: 2});
            break;
            
            
            //ʵ����ʾƬ�Σ���Ϣ��
            case 10:
                layer.alert('һ������ͨ����Ϣ��');
            break;
            case 11:
                layer.alert('��Ϣ����ʾ��', 11, !1);
                
            break;
            case 12:
                layer.confirm('��Ϣ����ʾ��',function(index){
                    layer.msg('��Ϣ����ʾ��');
                });
                
            break;
            case 13:
                layer.msg('Ҳ���Բ�����ʾͼ��Ŷ', 2, -1);
                
            break;
            case 14:
                var i = 0;
                $.layer({
                    dialog:{type:0,msg:'<a href="javascript:;" id="setface">����ң���ͼ��</a>'},
                    success: function(layerE){
                        $('body').off('click','#setface').on('click','#setface', function(){
                            var index = layer.getIndex(this);
                            i++;
                            layerE.find('.xubox_msgico').removeClass('xubox_msgtype'+(i-1)).addClass('xubox_msgtype'+i);
                            i > 15 && layer.close(index);
                        });
                    }, end: function(){
                        i = 0;
                    }
                });
                
            break;
            case 15:
                layer.msg('�ȵ�ʺ��', 2, 13);
                
            break;
            
            //ʵ����ʾƬ�Σ�ҳ��㣩
            case 16:
                var pagei = $.layer({
                    type: 1,   //0-4��ѡ��,
                    title: false,
                    border: [0],
                    closeBtn: [0],
                    shadeClose: true,
                    area: ['460px', '280px'],
                    page: {
                        html: '<div style="width:460px; height:280px; background-color:#81BA25; color:#fff;"><div style="padding:20px;">���洫���κ�htmlԪ��</div></div>'
                    }
                });
            break;
            case 17:
                var i = $.layer({
                    type : 1,
                    title : false,
                    fix : false,
                    offset:['50px' , ''],
                    area : ['515px','615px'],
                    page : {dom : '#tong'}
                });
                
            break;
            case 18:
                $.layer({
                    type : 1,
                    title : false,
                    border: [0],
                    area : ['503px','395px'],
                    page : {dom : '#taobao'}
                });
                
            break;
            
            //ʵ����ʾƬ�Σ�iframe�㣩
            case 19:
                $.layer({
                    type: 2,
                    title: false,
                    fix: false,
                    area: ['910px' , '700px'],
                    shadeClose: true,
                    closeBtn: false,
                    offset: [($(window).height() - 700)/2+'px', ''],
                    border: [0],
                    shade : [0.9, '#000'],
                    iframe: {src: 'http://im.qq.com/online/flash/flash20140304.swf'}
                });
            break;
            case 20:
                $.layer({
                    type: 2,
                    border: [0],
                    title: false,
                    shadeClose: true,
                    closeBtn: false,
                    iframe: {src : 'test/center.html'},
                    area: ['860px', '400px']
                });
            break;
            
            case 21:
                $.layer({
                    type: 2,
                    shade: [0],
                    fix: false,
                    title: 'iframe�Ӹ�����',
                    maxmin: true,
                    iframe: {src : 'iframe.html'},
                    area: ['800px' , '440px'],
                    close: function(index){
                        layer.msg('��������Ӵ��ڱ�ǣ�' + layer.getChildFrame('#name', index).val(),3,1);
                    }
                });
                
            break;
            case 22:
                layer.load(5, 0);
            break;
            case 23:
                layer.load('�����С�', 2)
                
            break;
            case 24:
                layer.tips('����ʵ���û�С��Ƭʲô��ѽ', this, {
                    style: ['background-color:#0FA6D8; color:#fff', '#0FA6D8'],
                    maxWidth: 150,
                    time:1
                });
                
            break;
            case 25:
                layer.tips('������Զ�ŵĹ�/��¶�յ�/�����޾������������/�������� ������Զ�밵�� д��2012����������', this, {
                    guide: 1,
                    time: 1,
                    style: ['background-color:#F26C4F; color:#fff', '#F26C4F'],
                    maxWidth:240
                });
                
            break;
            case 26:
                layer.tips('guide:2��ָ����', this, {
                    guide: 2,
                    time:1
                });
                
            break;
            case 27:
                layer.tips('����Ч�����Լ��������ְɡ�', this, {
                    guide: 3,
                    style: ['background-color:#c00; color:#fff', '#c00'],
                    time: 1
                });
            break;
        }
    });
});

//��������
$('.open').on('click', function(){
    var othis = $(this), type = othis.attr('type');
    switch(type){
        case 'zdlist':
            juan.zdlist();
        break;
        case 'prompt':
            layer.prompt({title: '�����κο����ȷ��',type: 1}, function(pass){
                layer.prompt({title: '����ϴ�����������ȷ��',type: 2}, function(file){
                    layer.prompt({title: '���д��ɶ����ȷ��',type: 3}, function(val){
                        layer.msg('��ʾ���<br>���Ŀ��'+ pass +'<br>�����ļ���'+ file +'<br>�����д���ˣ�'+val, 3, -1);
                    });
                });
            });
        break;
        case 'tab':
            var tabIframe = function(src){
                return '<iframe frameborder="0" src="'+ src +'" style="width:1000px; height:465px;"></iframe>';
            };
            layer.tab({
                area: ['1000px', '500px'],
                data: [{
                    title: 'Say��̳', 
                    content: tabIframe('http://say.sentsin.com/')
                }, {
                    title: '���Ĳ���', 
                    content: tabIframe('http://sentsin.com')
                }, {
                    title: '����', 
                    content: '<div style="padding:20px; line-height:30px; text-align:center">һ��ǰ�����ƺ����Ӵ���ֽ�Ǹ��ơ�<br>����ʡ�������֡�����</div>'
                }]
            });
        break;
        case 'photos':
            var imghtml = '<div style="padding:20px;">���ﴫ���Զ����html��Ҳ���Բ��ô��루����ζ�Ų�����������򣩡�<p>���֧�����ҷ������֧��Esc�ر�</p></div>'
                        +'<div style="margin:10px;"><div id="SOHUCS"></div></div>';
            if(conf.photoJSON){
                layer.photos({
                    html: imghtml,
                    json: conf.photoJSON
                });
            } else {
                layer.load();
                $.getJSON(conf.hosts + 'jquery/layer/test/photos.json', {}, function(json){
                    conf.photoJSON = json;
                    layer.photos({
                        html: imghtml,
                        json: json
                    });
                    layer.closeLoad();
                });
            }
            (function(){
                var appid = 'cyrfTj9BQ',
                conf = 'prod_aaf8e91fc518ca4809456d0e7c9f0457';
                var doc = document,
                s = doc.createElement('script'),
                h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
                s.type = 'text/javascript';
                s.charset = 'utf-8';
                s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
                h.insertBefore(s,h.firstChild);
            })();
        break;
        case '':
            
        break;
        case '':
            
        break;
        case '':
            
        break;
    };
});

//��������
$('.layer_nav a').on('click',function(){
    var scroll = $(this).attr('scroll');
    switch(scroll){
        case 'about':
            $('html, body').animate({scrollTop : $('.layer_about').offset().top},200);
        break;
        case 'api':
            $('html, body').animate({scrollTop : $('.layer_api').offset().top},300);
        break;
        case 'demo':
            $('html, body').animate({scrollTop : $('.layer_demo').offset().top},500);
        break;
    };
});

//��Ȩ
conf.getShouQuan = function(html){
    $.layer({
        type: 1,
        title: false,
        closeBtn: false,
        area: ['1000px', '500px'],
        border : [5, 0.5, '#666'],
        shade: [0.8, '#000'],
        shadeClose: true,
        offset: ['0px', ''],
        shift: 'top',
        page: {
            html: html
        }
    });
};
$('#seebanquan').on('click',function(){
    if(!conf.shouquanDate){
        $.get('test/shouquan.html', function(datas){
            conf.shouquanDate = datas;
            conf.getShouQuan(datas);
        });
    } else {
        conf.getShouQuan(conf.shouquanDate);
    }
});

window.paysentsin = function(){
    return $.layer({
        type:1,
        area: ['512px', '512px'],
        title: false,
        offset: [(($(window).height() - 512)/2)+'px',''],
        page: {html: '<img src="http://res.sentsin.com/images/pay.png">'},
        shadeClose: true
    });
};

//��������
var juan = function(){
    var i = $.layer({
        type: 1,
        title: false,
        closeBtn: false,
        border : [5, 0.5, '#666'],
        offset: ['0px','50%'],
        shadeClose: true,
        area: ['620px','auto'],
        page: {
            html: '<div class="juan"><p>��2012��6��6�ŷ���</p><p>����</p><p>layer�Ѿ�������ʮ�����webƽ̨</p><p>������Ѹ������</p><p>����Ȼ��Ϊ�ڶ࿪����Ա�ķǳ����õ�ǰ�������</p><p>�����л��Щ������Щ��ע��ʹ��layer��������Ƶ�����</p><p>��л����Ⱥ�ѵ�֧�������</p><p class="juanmove">��������������</p><p>��ԭ������������layer��ó���Ѱ����������</p><p>Ҳ�߷����ҿ���layui�ľ���</p><p>�����ϲ��layer��������ʵ���ж���֧������</p><p>���ɹ���layer�İ�Ȩ��������һ����ҵ��;������������layer�ж����ޡ�</p><p>layer���ڼ���, ʹ����Ȼ�ڼ���,�������ڼ�����</p><p style="text-align:right;">��������</p><p style="padding-top:10px;font-size:0; text-align:center;"><a href="http://item.taobao.com/item.htm?id=37295654589" target="_blank" class="juanGo">ȥ��Ȩ</a><a href="javascript:;" class="juanGo" id="paysentsin">����</a><a href="javascript:;" class="juanLu">·��</a></p></div>'
        }, success: function(){
            layer.shift('top', 500);
            $('#paysentsin').on('click', function(){
                layer.close(i);
                paysentsin();
            });
        }
    });
    $('.juanLu').on('click', function(){
        layer.close(i);
    });
};
$('#juan').on('click', function(){
    if(!$('.juan')[0]){
        juan();
    }
});

juan.zdlist = function(times){
    var ii = $.layer({
        type:1,
        title: false,
        closeBtn: false,
        fix: false,
        shadeClose: true,
        bgcolor: '',
        offset: ['300px', ''],
        shade: [0.9, '#000'],
        border: [0],
        area: ['800px', '600px'],
        time: times,
        page: {html: juan.lister},
        success: function(layerE){
            var closeZD = layerE.find('.closeZD'), zzmain = layerE.find('#zzmain'), zdcout = layerE.find('#zdcout'), couts = 0;
            setTimeout(function(){
                layerE.animate({top:100},100, function(){
                    zzmain.fadeIn(1000);
                });
            },1000);        
            closeZD.on('click', function(){
                layer.close(ii);
            });
            
            $.each($('#zzmain>ul>li'), function(){
                var othis = $(this), n = Math.round(othis.attr('n'));
                couts += n;
            });
            zdcout.html(couts+'Ԫ');
        }
    });
    return ii;
};

//��Ը
$('#xinyuan').on('click', function(){
    if(!layer.xinyuanIframe){
        var i = $.layer({
            type: 2,
            shade: [0],
            title: false,
            offset: ['100px',''],
            closeBtn: [0, false],
            bgcolor: '',
            area: ['590px', '380px'],
            border: [0],
            iframe: {src : '../../hello/year2013.html'},
            success:function(layerDom){
                layerDom.append('<div id="y2013_move" style="height:110px; width:590px; cursor:move; position:absolute; top:0; left:0; z-index:20000000;"></div><div id="y2013_close" style="position:absolute;right:0; top:0; width:40px; height:40px; cursor:pointer; z-index:20000001;"><div>');
                this.move = '#y2013_move';
                layer.setMove();
                $('#y2013_close').on('click', function(){
                    var index = layer.getIndex(this);
                    layer.close(index);
                });
                layer.tips('����Ըǽ����layerʵ�֣����͵�Ը��������<a href="/" style="color:#c00" target="_blank">������ҳ</a>չ��', '#xinyuan',5);
            }, end: function(){
                layer.xinyuanIframe = false;
            }
        });
    }
    layer.xinyuanIframe = true;
});

/*
layer.use('extend/layer.ext.js', function(){
    layer.ext = function(){
        setTimeout(function(){
        layer.prompt()
        }, 2000);
    }
});
*/


//���ؼ��첽
conf.postmsg = function(){
    //��ȡ������
    if($('#downs')[0]){
        $.post('http://sentsin.com/item/filedown.asp?action=hits&id=3957', function(datas){
            var downloads = datas.match(/\d+/)[0];
            $('#downs').html(downloads);
        });
    }
    
    //��ȡ��ע����
    $.post('http://sentsin.com/item/GetHits.asp?Action=Count&GetFlag=0&m=113&ID=41', function(datas){
        var downloads = datas.match(/\d+/)[0];
        $('#sees').html(downloads);
    });
    
    //��ȡ��������
    if($('#seepay')[0]){
        $.get('doc/zdlist.txt', function(data){
            juan.lister = data;
            $('#seepay').on('click', function(){
                juan.zdlist(0);
            });
        });
    }
};

//tab
conf.tabs = function(nodes, now, main, event){
    var set, hashs = {
        api: {
            '#base': 0,
            '#method': 1,
            '#ext': 2
        }
    };
    
    //ͨ��hash��λapi
    if(location.hash){
        var index = hashs.api[location.hash];
        nodes.eq(index).addClass(now).siblings().removeClass(now);
        $(main).eq(index).show().siblings(main).hide();
    }
    
    nodes[event || 'hover'](function(){
        var othis = $(this), hash = othis.attr('hash');
        clearTimeout(set);
        set = setTimeout(function(){
            var index = othis.index();
            othis.addClass(now).siblings().removeClass(now);
            $(main).eq(index).show().siblings(main).hide();
            if(hash){
                location.hash = hash;
            }
        }, event ? 0 : 300);
    });
    
    event || nodes.mouseleave(function(){
        clearTimeout(set);
    });
};

//����scroll
conf.scroll = function(){
    conf.log = [0, $('.layer_nav')];
    conf.win.on('scroll', function(){
        var stop = conf.win.scrollTop();
        if(stop >= 260){
            if(!conf.log[0]){
                conf.log[0] = 1;
                $('.layer_html')[0] || conf.log[1].addClass('fixnav');
                conf.gotop.show();
            }
        } else {
            if(conf.log[0]){
                conf.log[0] = 0;
                $('.layer_html')[0] || conf.log[1].removeClass('fixnav');
                conf.gotop.hide();
            }
        }
        stop = null;
    });
};

//�¼�
conf.event = function(){
    //���ؼ���
    $('.layer_down').on('click',function(){
        $.ajax({
            url: conf.hosts + '/item/filedown.asp?id=3957',
            method : 'GET'
        });
    });
    
    conf.gotop = $('.layer_gotop');
    conf.scroll();
    
    //���ض���
    conf.gotop.on('click',function(){
        $('html, body').animate({scrollTop : 0},$(this).offset().top/7);
    });

    conf.tabs($('.demotab>li'),'demonow','.democoder');
    $('.democoder').hide().eq(2).show();
    
    conf.tabs($('.layer_apiTitle>li'),'apinow','.layer_apiBox', 'click');
    
    $('.navlist>li').on('click', function(){
        var othis = $(this);
        othis.addClass('thisnavlist').siblings().removeClass('thisnavlist');
    });
    
    
};

$('#maixie').on('click', function(e){
    var othis = $(this), href = othis[0].href;
    e.preventDefault();
    $.layer({
        type: 1,
        border: [0],
        bgcolor: '',
        shade: [0.9, '#000'],
        shadeClose: true,
        area: ['auto', 'auto'],
        title: [
            '����ȯ˵��',
            'border:none; background:#FF4400; color:#fff;'
        ],
        page: {
            html: '<div style="width:410px; padding:10px 20px; line-height:24px; background: #fff;"><p>���ڱ�����ͼ�һ�����ǰ��С���룬Ҳ���ǣ������Ա��ꡣ�ֵ��̼��������������һ��һϦ������ȥ�ġ���ˣ���Ҫ������λС�����������������������������뷽ʽΪ��</p><p>1����1-3������0.1Ԫ��</p><p>2������߷����󣬲�Ҫ����ȷ���ջ���2�����ȷ�ϡ�</p><p>3��ȷ���ջ�����ñ���������ȯ������������Ŀ�ģ�</p><p>��лл�������</p><div style="margin-top:10px; text-align:center;"><button onclick="location.href=\''+ href +'\'" class="btns" style="height:36px; line-height:36px; padding:0 35px; border-radius: 0;">ȥ����</button></div></div>'
        }
    });
});

//��ʼ��ִ��
conf.start = (function(){
    
    if($().laycode){
        //��������
        $('.codetop').laycode({
            title: '������ʾ��Ӧ��˵��',
            height: '240px'
        });
        $('.codes').laycode({
            title: '��ʾ˵��',
            height: '300px'
        });
    }
    
    if($('#downs')[0]){
        conf.postmsg();
    }
    
    if(conf.ie6){
        setTimeout(function(){
            layer.msg('���������ietest��ie6ģʽ�����ֵ�������һƬ��ɫʱ���벻�þ��ţ��Ⲣ��layerδ�����ݣ������㵱ǰ�汾��ietest��ģ���ie6����δ���˾���֧�֣���׼ie6�������д����⣬����������Ҫ���ġ�', 15, {shade: false, type: 9});
        }, 1000);
    }
    
    conf.event();
    
}());

}();