1��ҳ�����룺jquery.whatyPager-1.1.6.js��jquery.whatyPager-1.1.6.css

2����ʼ����ҳ,���ݷ���֧��html��json��ʽ���˴���html���ݷ��ط�ʽΪ����
/**
 * ���ؿγ�֪ͨ��ҳ�б�
 */
$(function(){
	var courseId = $("#courseId").val();
	$("#question_contents").initWhatyPager({
		curPageNum: 1,
		pageSizeNum: 10,
		dataType : 'html',		//֧��json
		pagerUrl: basePath+'/learn/blue/coursenotice/course_notice_list.action',
		pagerData: 'params.courseId='+courseId+'&params.curPage=1',
		pagerCallHandel: function(pageHtml, pagerParam) {	//pageData:��ҳ���ݣ���dataType��'html'��˴�pageHtml��Ϊ���º���б�htmlƬ�Σ��ʺ�ģ�忪��������jsƴ�����б����ݣ�����dataType��'json'��pageHtmlΪPage��json������ʽ���Լ�����page��������б�
			
			$("#notice_list").html(pageHtml);
		},
		setTotalCount : function(){	//dataType : 'html'����ʱ����Ҫ�λص�������ȡ�ܼ�¼�����˴������д��Ż�
		    var totalCount = $("#page_totalCount").val();
		    return totalCount;
		}
	});
});


3.��ҳ����Ϣ��ʾ���Ʋ������£�����������js�ļ��ڵ����ò���:
	isShowPageLinkToolBar: true,			//�Ƿ����ķ�ҳҳ��������ʾ����Ĭ��true����ʾ��false:����ʾ
	isShowRowCountToolBar: true,			//�Ƿ���ʾ�ܼ�¼��
	isShowTotalPageToolBar: true,			//�Ƿ���ʾ��ҳ��
	isShowPageSizeSelectToolBar: false,		//�Ƿ���ʾҳ��Сѡ������ѡ��
	isShowJumpPageToolBar: true,			//�Ƿ���ʾ��ҳ��
	isShowJumpPageToolBar: true,			//�Ƿ���ʾ��ҳ��