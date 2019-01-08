import styled from 'styled-components';

export const DetailWrapper = styled.div `
    width: 620px;
    margin: 0 auto;
    margin-top: 65px;
    padding-top: 20px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const DetailTitle = styled.div `
    margin: 20px 0 0;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: #333;
`;

export const DetailAuthor = styled.div `
    margin: 30px 0 40px;
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #ddd;
    }
`;

export const DetailAuthorInfo = styled.div `
    margin-left: 15px;
    vertical-align: middle;
    display: inline-block;
    .name {
        cursor: pointer;
        color: #333;
        font-size: 16px;
        margin-right: 5px;
    }
    .follow {
        display: inline-block;
        padding: 4px 7px 3px 5px;
        font-size: 12px;    
        font-weight: 400;
        text-align: center;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        cursor: pointer;

        i {
            font-size: 12px;
            margin-right: 3px;
        }
    }
`;

export const DetailAuthorMeta = styled.div `
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
`;

export const DetailContent = styled.div `
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin: 0 0 25px;

    .hljs {
        display: block;
        overflow-x: auto;
        padding: .5em;
        color: #abb2bf;
        background: #282c34;
    }

    .output_wrapper
    {
         font-size: 16px;
         color: #3e3e3e;
         line-height: 1.6;
         font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;   
    }
    .output_wrapper *
    {
      font-size: inherit  ;
      color: inherit;
      line-height: inherit;
      margin:0px;
      padding:0px;
    }
    
    p {/*段落*/
      margin: 1.5em 0px;
    }
    h1,h2,h3,h4,h5,h6 {
      margin: 1.5em 0px;
      font-weight:bold;
    }
    h1 {
      font-size: 1.6em  ;
    
    }
    h2 {
      font-size: 1.4em;
    }
    h3 {
      font-size: 1.3em;
    }
    h4 {
      font-size: 1.2em;
    }
    h5 {
      font-size: 1em;
    }
    h6 {
      font-size: 1em;
    }
    
    ul, ol {
      padding-left: 32px;
    }
    ul{ /*无序列表*/
        list-style-type: disc;
    }
    ol { /*有序列表*/
      list-style-type: decimal;
    }
    li *  
    {
     /* color: #3e3e3e;*/
    } 
    
    li{  /*在公众号下，改变不了li符号的属性（如颜色），并会影响其子元素的属性;而在其它博客平台中，则能正常使用*/ 
        margin-bottom: 0.5em;
    /*  color:#159957; */    
    }
    .code_size_default  /*代码块默认size*/
    {
      line-height: 18px;
      font-size: 14px; 
      font-weight:normal;
      word-spacing:0px; 
      letter-spacing:0px; 
    }
    .code_size_tight /*代码块紧凑size*/
    {
       line-height: 15px; 
       font-size: 11px; 
       font-weight:normal;
       word-spacing:-3px; 
       letter-spacing:0px; 
    }
    pre {
        display: block;
        margin: 0 0 10px;
        line-height: 1.42857;
        word-break: break-all;
        word-wrap: break-word;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 15px !important;
        font-size: 13px;
        word-wrap: normal;
        word-break: break-word!important;
        white-space: pre;
        overflow: auto;

        code {
            background: #282c34
        }
    }

    pre code 
    {           
        font-family: Menlo,Monaco,Consolas,Courier New,monospace;
    }

    blockquote { /*引用块*/
      display: block;
      padding: 15px 1rem;
      font-size: 0.9em;
      padding-right: 15px;
      margin: 1em 0;
      color: #819198;
      border-left: 6px solid #dce6f0;
      background: #f2f7fb;
      overflow: auto;
      overflow-scrolling: touch; 
      word-wrap: normal;
      word-break: normal;  
    }
    blockquote p {
        margin: 0px;
    }
    
    a { /*超链接*/
      text-decoration: none;
      color: #1e6bb8;
      word-wrap:break-word;
    }
    
    strong  /*强调*/
    {
      font-weight: bold;
    }
    em /*斜体*/
    {
     font-style:italic;
    }
    del /*删除线*/
    {
     font-style:italic;
    }
    strong em/*强调的斜体*/
    {
    font-weight: bold;
    }
    
    hr {  /*分隔线*/
      height: 1px;
      margin: 1.5rem 0px;
      border: none;
      border-top: 1px dashed #A5A5A5;
    }
    
    
    img
    {
      display: block;
      margin:0 auto;  /*图片水平居中*/
      /* margin:0 0;  */ /*图片水平居左，如需要请打开*/
      max-width:100%;
    }
    
    /*================表格开始================*/
    table
    {
     display:table;
     width: 100% ;
     text-align: left;
    }
    tbody {
      border: 0;
    }
    
    table tr {
      border: 0;
      border-top: 1px solid #CCC;
      background-color: white;
    
    }
    
    /*隔行改变行的背景色，如需要请打开*/
    /*
    table tr:nth-child(2n) {
      background-color: #F8F8F8;
    }
    */
    
    table tr th, table tr td {
      font-size: 1em;
      border: 1px solid #CCC;
      padding: 0.5em 1em;
      text-align: left;
    }
    /*表头的属性*/
    table tr th {
     font-weight: bold;
      background-color: #F0F0F0;
    }
    /*================表格结束================*/
    
    .katex-display {/*数学公式*/
      font-size:1.5em;
    }
    
    a[href^="#"] sup
    {/*注脚*/
      vertical-align:super;
      margin:0 2px;  
      padding:1px 3px; 
      color: #ffffff;
      background:#666666;
      font-size:0.7em;
    }
    
    /*================任务列表开始================*/
    .task-list-list {
      list-style-type: none;
    }
    .task-list-list.checked {/*已完成*/
      color: #3e3e3e;
    }
    
    .task-list-list.uncheck {/*未完成*/
      color: #bfc1bf;
    }
    .task-list-list .icon_uncheck, .task-list-list .icon_check {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
    .task-list-list .icon_check:before
    {/*已完成*/
        content: "√";
        border: 2px solid #3e3e3e;
        color:red;
    }
    .task-list-list .icon_uncheck:before
    {/*未完成*/
       content: "x";
       border: 2px solid #bfc1bf;
        color: #bfc1bf;
    }
    .task-list-list .icon_check:before, .task-list-list .icon_uncheck:before
    {/*标志框*/
      padding:2px;
      padding-left: 5px;
      padding-right: 8px;
      border-radius:5px;
    }
    /*================任务列表结束================*/
    
    
    /*“掘金”可能要把这些margin和padding设为0，否则间距会很大.*/
    /*
    p, h1,h2,h3,h4,h5,h6,li,blockquote   
    {
      margin:0px;
      padding:0px;
    }
    */
`;

export const SupportAuthor = styled.div `
    padding: 20px 0;
    text-align: center;
    clear: both;
    box-sizing: border-box;
    p {
        padding: 0 30px;
        margin-bottom: 20px;
        font-size: 17px;
        font-weight: 700;
        color: #969696;
    }
`;

export const SupportPay = styled.div `
    display: inline-block;
    margin-bottom: 20px;
    padding: 11px 25px;
    font-size: 16px;
    color: #fff;
    background: #ea6f5a;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid transparent;
`;

export const Supporter = styled.div `
    height: 50px;
`;

export const DetailFoot = styled.div `
    margin-bottom: 30px;
    font-size: 12px;
    color: #c8c8c8;
    cursor: pointer;
    .iconfont {
        margin-right: 2px;
        font-size: 15px;
    }
    .copyright {
        display: inline-block;
        float: right;
    }
    .modal-wrap {
        float: right;
        margin-right: 20px;
    }
`;

export const FollowDetail = styled.div `
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    box-sizing: border-box;
`;

export const FollowInfo = styled.div `
    .avatar {
        float: left;
        margin-right: 10px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ddd;
        cursor: pointer;
        display: inline-block;
    }
    .success {
        display: inline-block;
        float: right;
        margin-top: 9px;
        padding: 11px 0;
        width: 100px;
        font-size: 16px;
        border-color: #42c02e;
        background: #42c02e;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
        border: 1px solid transparent;
        text-align: center;
        .iconfont {
            margin-right: 3px;
        }
    }
    .success:hover {
        background: #3db922;
    }

    .title {
        color: #2f2f2f;
        margin-right: 3px;
        font-size: 17px;
        line-height: 1.8;
        cursor: pointer;
        vertical-align: middle;
    }

    p {
        margin: 0 0 10px;
        color: #969696;
    }
`;

export const Signature = styled.div `
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
}
`;