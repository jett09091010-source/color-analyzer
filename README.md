[index.html](https://github.com/user-attachments/files/27383365/index.html)
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI 专属穿搭分析</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root{--bg:#0e0c0a;--surface:#1a1714;--surface2:#242018;--border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.14);--text:#f0ebe4;--text2:#a09890;--text3:#6a6058;--gold:#c9a96e;--gold-light:#e8ccaa;}
*{box-sizing:border-box;margin:0;padding:0;}
body{background:var(--bg);color:var(--text);font-family:'Noto Sans SC',sans-serif;font-weight:300;min-height:100vh;overflow-x:hidden;}
body::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 70% 50% at 15% 15%,rgba(201,169,110,0.05) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 85% 85%,rgba(107,154,184,0.04) 0%,transparent 60%);pointer-events:none;z-index:0;}
.container{max-width:700px;margin:0 auto;padding:56px 24px 80px;position:relative;z-index:1;}
.header{text-align:center;margin-bottom:52px;}
.logo-mark{display:inline-flex;gap:5px;margin-bottom:22px;}
.logo-dot{width:9px;height:9px;border-radius:50%;animation:pulse 3s ease-in-out infinite;}
.logo-dot:nth-child(1){background:#e8a87c;animation-delay:0s;}
.logo-dot:nth-child(2){background:#9b8ec4;animation-delay:.5s;}
.logo-dot:nth-child(3){background:#b5824a;animation-delay:1s;}
.logo-dot:nth-child(4){background:#6b9ab8;animation-delay:1.5s;}
@keyframes pulse{0%,100%{transform:scale(1);opacity:.5;}50%{transform:scale(1.5);opacity:1;}}
.title{font-family:'Noto Serif SC',serif;font-size:26px;font-weight:300;letter-spacing:.12em;margin-bottom:10px;}
.title span{color:var(--gold);}
.subtitle{font-size:13px;color:var(--text3);letter-spacing:.06em;line-height:1.9;}
.steps-bar{display:flex;align-items:center;justify-content:center;margin-bottom:40px;}
.si{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text3);letter-spacing:.06em;}
.si.active{color:var(--gold);}
.si.done{color:var(--text2);}
.sn{width:22px;height:22px;border-radius:50%;border:1px solid currentColor;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;}
.si.done .sn{background:rgba(201,169,110,.2);border-color:var(--gold);color:var(--gold);}
.si.active .sn{background:var(--gold);border-color:var(--gold);color:var(--bg);}
.sl{width:28px;height:1px;background:var(--border2);margin:0 8px;}
.card{background:var(--surface);border:1px solid var(--border2);border-radius:2px;padding:28px;margin-bottom:14px;}
.card-title{font-size:11px;letter-spacing:.18em;color:var(--text3);text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px;}
.card-title::after{content:'';flex:1;height:1px;background:var(--border);}
.upload-zone{border:1px dashed var(--border2);border-radius:2px;padding:40px 24px;text-align:center;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;}
.upload-zone:hover{border-color:var(--gold);background:rgba(201,169,110,.03);}
.upload-zone.has-photo{padding:0;border-style:solid;}
.upload-zone input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}
.upload-icon{font-size:24px;color:var(--text3);margin-bottom:12px;}
.upload-label{font-size:14px;color:var(--text2);margin-bottom:6px;}
.upload-hint{font-size:11px;color:var(--text3);line-height:1.7;}
.photo-preview{width:100%;max-height:300px;object-fit:cover;display:block;}
.photo-overlay{position:absolute;bottom:0;left:0;right:0;padding:14px 16px;background:linear-gradient(to top,rgba(14,12,10,.9) 0%,transparent 100%);display:flex;justify-content:space-between;align-items:center;}
.photo-name{font-size:12px;color:var(--text2);}
.photo-change{font-size:11px;color:var(--gold);cursor:pointer;padding:4px 10px;border:1px solid var(--gold);border-radius:1px;background:transparent;}
.fg3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}
.fg2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.field{display:flex;flex-direction:column;gap:7px;}
.fl{font-size:11px;color:var(--text3);letter-spacing:.1em;}
.fi{background:var(--surface2);border:1px solid var(--border2);border-radius:1px;padding:10px 14px;font-family:'Noto Sans SC',sans-serif;font-size:13px;color:var(--text);outline:none;transition:border-color .2s;-webkit-appearance:none;}
.fi:focus{border-color:var(--gold);}
.fi::placeholder{color:var(--text3);}
select.fi{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236a6058'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:30px;}
select.fi option{background:#1a1714;color:var(--text);}
.bmi-wrap{margin-top:10px;display:none;}
.bmi-bar{height:4px;background:var(--border2);border-radius:2px;margin-bottom:5px;}
.bmi-fill{height:100%;border-radius:2px;transition:width .5s ease;}
.bmi-label{font-size:10px;color:var(--text3);}
.tag-grid{display:flex;flex-wrap:wrap;gap:8px;}
.style-tag,.concern-tag{padding:7px 14px;border:1px solid var(--border2);border-radius:1px;font-size:12px;color:var(--text2);cursor:pointer;transition:all .2s;user-select:none;}
.style-tag.on{border-color:var(--gold);color:var(--gold);background:rgba(201,169,110,.08);}
.concern-tag.on{border-color:#6b9ab8;color:#6b9ab8;background:rgba(107,154,184,.08);}
.btn-go{width:100%;padding:18px;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:'Noto Sans SC',sans-serif;font-size:14px;font-weight:400;letter-spacing:.18em;cursor:pointer;border-radius:1px;transition:all .3s;position:relative;overflow:hidden;margin-top:8px;}
.btn-go::before{content:'';position:absolute;inset:0;background:var(--gold);transform:translateX(-100%);transition:transform .35s ease;z-index:0;}
.btn-go:hover::before{transform:translateX(0);}
.btn-go:hover{color:var(--bg);}
.btn-go span{position:relative;z-index:1;}
.btn-go:disabled{opacity:.4;cursor:not-allowed;}
.btn-go:disabled::before{display:none;}
.loading{display:none;text-align:center;padding:56px 24px;border:1px solid var(--border);border-radius:2px;background:var(--surface);}
.lring{width:44px;height:44px;border:1px solid var(--border2);border-top-color:var(--gold);border-radius:50%;animation:spin 1.2s linear infinite;margin:0 auto 20px;}
@keyframes spin{to{transform:rotate(360deg);}}
.ltitle{font-size:14px;color:var(--text2);letter-spacing:.08em;margin-bottom:16px;}
.lstep{font-size:12px;color:var(--text3);margin:5px 0;transition:color .4s;}
.lstep.on{color:var(--gold);}
.rw{display:none;}
.rhero{text-align:center;padding:44px 28px;border:1px solid var(--border2);border-radius:2px;background:var(--surface);margin-bottom:14px;}
.rbadge{display:inline-block;font-size:10px;letter-spacing:.18em;padding:4px 16px;border-radius:1px;margin-bottom:18px;}
.rtitle{font-family:'Noto Serif SC',serif;font-size:30px;font-weight:300;letter-spacing:.1em;margin-bottom:6px;}
.rsub{font-size:13px;color:var(--text2);line-height:1.8;margin-bottom:16px;}
.rstats{display:inline-flex;gap:24px;padding:12px 24px;border:1px solid var(--border);border-radius:1px;background:rgba(255,255,255,.02);}
.rstat-v{font-size:15px;font-weight:500;text-align:center;}
.rstat-l{font-size:10px;color:var(--text3);letter-spacing:.08em;margin-top:3px;text-align:center;}
.rc{background:var(--surface);border:1px solid var(--border);border-radius:2px;padding:24px;margin-bottom:12px;}
.rst{font-size:10px;letter-spacing:.2em;color:var(--text3);text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:10px;}
.rst::after{content:'';flex:1;height:1px;background:var(--border);}
.pr{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;}
.pc{flex:1;min-width:56px;display:flex;flex-direction:column;align-items:center;gap:7px;}
.ps{width:100%;height:52px;border-radius:1px;border:1px solid rgba(255,255,255,.06);}
.pn{font-size:10px;color:var(--text3);text-align:center;line-height:1.4;}
.ar{display:flex;gap:8px;flex-wrap:wrap;}
.ac{display:flex;align-items:center;gap:8px;padding:7px 12px;border:1px solid var(--border);border-radius:1px;flex:1;min-width:110px;}
.ad{width:14px;height:14px;border-radius:1px;flex-shrink:0;}
.at{font-size:11px;color:var(--text2);line-height:1.4;}
.bg{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.bc{background:var(--surface2);border:1px solid var(--border);border-radius:1px;padding:16px;}
.bt{font-size:10px;letter-spacing:.12em;color:var(--text3);margin-bottom:8px;}
.bv{font-size:13px;color:var(--text);line-height:1.7;}
.oi{padding:14px 0;border-bottom:1px solid var(--border);display:flex;align-items:flex-start;gap:14px;}
.oi:last-child{border-bottom:none;padding-bottom:0;}
.oo{font-size:10px;letter-spacing:.12em;color:var(--text3);min-width:52px;padding-top:2px;}
.of{font-size:13px;color:var(--text);line-height:1.7;flex:1;}
.ot{font-size:11px;color:var(--text3);margin-top:4px;}
.mg{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;}
.mi{background:var(--surface2);border:1px solid var(--border);border-radius:1px;padding:14px;}
.ml{font-size:10px;color:var(--text3);letter-spacing:.1em;margin-bottom:7px;}
.mv{font-size:12px;color:var(--text);line-height:1.6;}
.dv{border:none;border-top:1px solid var(--border);margin:16px 0;}
.pdf-cta{border:1px solid var(--gold);border-radius:2px;background:rgba(201,169,110,.05);padding:36px 28px;text-align:center;margin-bottom:12px;}
.pdf-title{font-family:'Noto Serif SC',serif;font-size:20px;font-weight:300;color:var(--gold-light);margin-bottom:8px;letter-spacing:.08em;}
.pdf-desc{font-size:13px;color:var(--text2);line-height:1.9;margin-bottom:24px;}
.pdf-feats{display:flex;justify-content:center;flex-wrap:wrap;gap:16px;margin-bottom:28px;}
.pdf-feat{font-size:12px;color:var(--text2);display:flex;align-items:center;gap:6px;}
.pdf-feat::before{content:'✦';font-size:8px;color:var(--gold);}
.btn-pdf{display:inline-flex;align-items:center;gap:10px;padding:16px 48px;background:var(--gold);color:var(--bg);font-family:'Noto Sans SC',sans-serif;font-size:15px;font-weight:500;letter-spacing:.1em;border:none;border-radius:1px;cursor:pointer;transition:opacity .2s;}
.btn-pdf:hover{opacity:.85;}
.btn-pdf:disabled{opacity:.5;cursor:not-allowed;}
.pdf-gen{display:none;margin-top:16px;font-size:12px;color:var(--text3);letter-spacing:.06em;}
.pr-ring{width:16px;height:16px;border:1px solid var(--border2);border-top-color:var(--gold);border-radius:50%;animation:spin 1s linear infinite;display:inline-block;vertical-align:middle;margin-right:8px;}
.btn-reset{width:100%;padding:13px;background:transparent;border:1px solid var(--border);color:var(--text3);font-family:'Noto Sans SC',sans-serif;font-size:12px;letter-spacing:.1em;cursor:pointer;border-radius:1px;transition:all .2s;margin-top:10px;}
.btn-reset:hover{border-color:var(--border2);color:var(--text2);}
@media(max-width:520px){.fg2,.fg3{grid-template-columns:1fr 1fr;}.bg,.mg{grid-template-columns:1fr;}.title{font-size:22px;}.container{padding:40px 16px 60px;}.rstats{gap:14px;}}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <div class="logo-mark">
      <div class="logo-dot"></div><div class="logo-dot"></div>
      <div class="logo-dot"></div><div class="logo-dot"></div>
    </div>
    <h1 class="title">AI <span>专属穿搭</span> 分析</h1>
    <p class="subtitle">上传照片 · 填写身材数据 · 告诉我你的困惑<br>AI 生成只属于你的配色方案，分析完即可下载专属 PDF</p>
  </div>

  <div class="steps-bar">
    <div class="si active" id="s1"><div class="sn">1</div>上传照片</div>
    <div class="sl"></div>
    <div class="si" id="s2"><div class="sn">2</div>身材信息</div>
    <div class="sl"></div>
    <div class="si" id="s3"><div class="sn">3</div>风格偏好</div>
  </div>

  <div id="formWrap">
    <div class="card">
      <div class="card-title">上传照片</div>
      <div class="upload-zone" id="uz">
        <input type="file" id="fi0" accept="image/*">
        <div class="upload-icon">◈</div>
        <div class="upload-label">点击上传或拖入照片</div>
        <div class="upload-hint">建议正面照，自然光下效果最佳 · 支持 JPG/PNG · 10MB 以内</div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">身材与基本信息</div>
      <div class="fg3" style="margin-bottom:14px;">
        <div class="field"><label class="fl">年龄</label><input class="fi" type="number" id="age" placeholder="25" min="15" max="80"></div>
        <div class="field"><label class="fl">身高 (cm)</label><input class="fi" type="number" id="ht" placeholder="165" min="140" max="200"></div>
        <div class="field"><label class="fl">体重 (kg)</label><input class="fi" type="number" id="wt" placeholder="55" min="35" max="150"></div>
      </div>
      <div class="bmi-wrap" id="bmiW">
        <div class="bmi-bar"><div class="bmi-fill" id="bmiF"></div></div>
        <div class="bmi-label" id="bmiL"></div>
      </div>
      <div class="fg2" style="margin-top:14px;">
        <div class="field"><label class="fl">体型自评</label>
          <select class="fi" id="bt">
            <option value="">请选择</option>
            <option value="偏瘦，肩窄腰细">偏瘦，肩窄腰细</option>
            <option value="标准，比例匀称">标准，比例匀称</option>
            <option value="上宽下窄（肩宽臀小）">上宽下窄（肩宽臀小）</option>
            <option value="下宽上窄（臀宽肩窄）">下宽上窄（臀宽肩窄）</option>
            <option value="腰部偏圆，苹果型">腰部偏圆，苹果型</option>
            <option value="腰细臀丰，沙漏型">腰细臀丰，沙漏型</option>
            <option value="四肢偏粗，整体匀称">四肢偏粗，整体匀称</option>
          </select>
        </div>
        <div class="field"><label class="fl">肤色自评</label>
          <select class="fi" id="st">
            <option value="">请选择</option>
            <option value="很白，偏冷白">很白，偏冷白</option>
            <option value="白皙，偏粉调">白皙，偏粉调</option>
            <option value="自然白，带暖调">自然白，带暖调</option>
            <option value="小麦色，偏暖黄">小麦色，偏暖黄</option>
            <option value="蜜色，健康感">蜜色，健康感</option>
            <option value="偏深，底调暖">偏深，底调暖</option>
            <option value="偏深，底调冷">偏深，底调冷</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">风格偏好</div>
      <div class="field" style="margin-bottom:18px;">
        <div class="fl" style="margin-bottom:10px;">喜欢的穿搭风格（可多选）</div>
        <div class="tag-grid">
          <div class="style-tag" onclick="tog(this)">简约日常</div><div class="style-tag" onclick="tog(this)">法式优雅</div>
          <div class="style-tag" onclick="tog(this)">韩系清新</div><div class="style-tag" onclick="tog(this)">复古文艺</div>
          <div class="style-tag" onclick="tog(this)">街头潮流</div><div class="style-tag" onclick="tog(this)">职场干练</div>
          <div class="style-tag" onclick="tog(this)">甜美少女</div><div class="style-tag" onclick="tog(this)">中性帅气</div>
          <div class="style-tag" onclick="tog(this)">度假慵懒</div><div class="style-tag" onclick="tog(this)">高街时髦</div>
        </div>
      </div>
      <div class="field">
        <div class="fl" style="margin-bottom:10px;">穿搭上的困扰（可多选）</div>
        <div class="tag-grid">
          <div class="concern-tag" onclick="tog(this)">总感觉显胖</div><div class="concern-tag" onclick="tog(this)">腿看起来短</div>
          <div class="concern-tag" onclick="tog(this)">肩膀太宽</div><div class="concern-tag" onclick="tog(this)">臀部偏大</div>
          <div class="concern-tag" onclick="tog(this)">手臂偏粗</div><div class="concern-tag" onclick="tog(this)">腰腹不平</div>
          <div class="concern-tag" onclick="tog(this)">不知道选什么颜色</div><div class="concern-tag" onclick="tog(this)">穿什么都不好看</div>
          <div class="concern-tag" onclick="tog(this)">皮肤显黄显暗</div><div class="concern-tag" onclick="tog(this)">上下身比例不好</div>
        </div>
      </div>
    </div>

    <button class="btn-go" id="btnGo" onclick="go()"><span>开始 AI 分析 · 生成专属报告</span></button>
  </div>

  <div class="loading" id="loading">
    <div class="lring"></div>
    <div class="ltitle">AI 正在生成你的专属方案</div>
    <div class="lstep" id="ls1">· 分析照片肤色与气质底调</div>
    <div class="lstep" id="ls2">· 计算身材比例与体型特征</div>
    <div class="lstep" id="ls3">· 匹配你的色彩人格类型</div>
    <div class="lstep" id="ls4">· 生成专属穿搭配色方案</div>
    <div class="lstep" id="ls5">· 准备个性化 PDF 报告</div>
  </div>

  <div class="rw" id="rw"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
let file=null,result=null,meta=null;

// File upload
document.getElementById('fi0').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0]);});
const uz=document.getElementById('uz');
uz.addEventListener('dragover',e=>{e.preventDefault();uz.style.borderColor='var(--gold)';});
uz.addEventListener('dragleave',()=>{uz.style.borderColor='';});
uz.addEventListener('drop',e=>{e.preventDefault();uz.style.borderColor='';if(e.dataTransfer.files[0])loadFile(e.dataTransfer.files[0]);});

function loadFile(f){
  if(!f.type.startsWith('image/'))return;
  file=f;
  const r=new FileReader();
  r.onload=e=>{
    uz.classList.add('has-photo');
    uz.innerHTML=`<img class="photo-preview" src="${e.target.result}"><div class="photo-overlay"><span class="photo-name">${f.name}</span><button class="photo-change" onclick="clearPhoto()">更换</button></div>`;
    upd();
  };
  r.readAsDataURL(f);
}
function clearPhoto(){
  file=null;uz.classList.remove('has-photo');
  uz.innerHTML=`<input type="file" id="fi0" accept="image/*"><div class="upload-icon">◈</div><div class="upload-label">点击上传或拖入照片</div><div class="upload-hint">建议正面照，自然光下效果最佳 · 支持 JPG/PNG · 10MB 以内</div>`;
  document.getElementById('fi0').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0]);});
}

// BMI
function calcBMI(){
  const h=parseFloat(document.getElementById('ht').value),w=parseFloat(document.getElementById('wt').value);
  if(!h||!w||h<100||w<20){document.getElementById('bmiW').style.display='none';return;}
  const bmi=w/((h/100)**2);
  document.getElementById('bmiW').style.display='block';
  let lb,cl,pct;
  if(bmi<18.5){lb=`BMI ${bmi.toFixed(1)} · 偏瘦`;cl='#6b9ab8';pct=20;}
  else if(bmi<24){lb=`BMI ${bmi.toFixed(1)} · 正常`;cl='#7aba8a';pct=45;}
  else if(bmi<28){lb=`BMI ${bmi.toFixed(1)} · 略微偏重`;cl='#e8a87c';pct=65;}
  else{lb=`BMI ${bmi.toFixed(1)} · 偏重`;cl='#c86060';pct=85;}
  document.getElementById('bmiF').style.cssText=`width:${pct}%;background:${cl};`;
  document.getElementById('bmiL').textContent=lb;
  upd();
}
document.getElementById('ht').addEventListener('input',calcBMI);
document.getElementById('wt').addEventListener('input',calcBMI);

function tog(el){el.classList.toggle('on');upd();}
function upd(){
  const s1=document.getElementById('s1'),s2=document.getElementById('s2'),s3=document.getElementById('s3');
  if(file){s1.className='si done';s2.className='si active';}
  const h=document.getElementById('ht').value,w=document.getElementById('wt').value;
  if(file&&h&&w){s2.className='si done';s3.className='si active';}
  if(document.querySelectorAll('.style-tag.on').length>0)s3.className='si done';
}

async function go(){
  const h=document.getElementById('ht').value,w=document.getElementById('wt').value;
  if(!file){alert('请先上传照片');return;}
  if(!h||!w){alert('请填写身高和体重');return;}
  const age=document.getElementById('age').value,bt=document.getElementById('bt').value,st=document.getElementById('st').value;
  const bmi=h&&w?(w/((h/100)**2)).toFixed(1):'';
  const styles=[...document.querySelectorAll('.style-tag.on')].map(e=>e.textContent);
  const concerns=[...document.querySelectorAll('.concern-tag.on')].map(e=>e.textContent);
  meta={age,h,w,bmi,bt,st,styles,concerns};
  document.getElementById('formWrap').style.display='none';
  document.getElementById('loading').style.display='block';
  ['ls1','ls2','ls3','ls4','ls5'].forEach((id,i)=>setTimeout(()=>document.getElementById(id).classList.add('on'),i*900));
  const b64=await toB64(file),mt=file.type||'image/jpeg';
  const info=[age?`年龄：${age}岁`:'',`身高：${h}cm 体重：${w}kg BMI：${bmi}`,bt?`体型：${bt}`:'',st?`肤色：${st}`:'',styles.length?`偏好风格：${styles.join('、')}`:'',concerns.length?`主要困扰：${concerns.join('、')}`:''].filter(Boolean).join('\n');
  const prompt=`你是顶级形象顾问，根据照片和数据生成完全个性化分析。

用户信息：
${info}

严格JSON返回：
{"season":"spring|summer|autumn|winter","season_cn":"春季型|夏季型|秋季型|冬季型","tagline":"气质描述20字内","skin_insight":"肤色观察30字内","body_analysis":"体型特征30字内","palette":[{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"}],"avoid_colors":[{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"},{"hex":"#hex","name":"颜色名","reason":"原因8字内"}],"body_tips":{"highlight":"凸显优点25字内","modify":"修饰不足25字内","proportion":"比例优化25字内","avoid_cut":"避开版型25字内"},"outfits":[{"occasion":"日常","formula":"穿搭公式","tip":"技巧15字内"},{"occasion":"约会","formula":"穿搭公式","tip":"技巧15字内"},{"occasion":"通勤","formula":"穿搭公式","tip":"技巧15字内"}],"makeup":{"lipstick":"口红建议15字内","blush":"腮红10字内","eyeshadow":"眼影10字内"},"jewelry":"首饰建议20字内","style_advice":"综合建议40字内"}`;
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:2000,messages:[{role:'user',content:[{type:'image',source:{type:'base64',media_type:mt,data:b64}},{type:'text',text:prompt}]}]})});
    const data=await resp.json();
    const raw=data.content?.map(b=>b.text||'').join('');
    result=JSON.parse(raw.replace(/```json|```/g,'').trim());
    document.getElementById('loading').style.display='none';
    render(result,meta);
  }catch(e){
    document.getElementById('loading').style.display='none';
    document.getElementById('formWrap').style.display='block';
    alert('分析出错，请重试');console.error(e);
  }
}

const SC={spring:{bb:'rgba(232,168,124,.15)',bc:'#e8a87c',tc:'#e8a87c'},summer:{bb:'rgba(155,142,196,.15)',bc:'#9b8ec4',tc:'#b0a0d8'},autumn:{bb:'rgba(181,130,74,.15)',bc:'#b5824a',tc:'#c9a870'},winter:{bb:'rgba(107,154,184,.15)',bc:'#6b9ab8',tc:'#88b8d8'}};

function render(r,m){
  const sc=SC[r.season]||SC.spring;
  const rw=document.getElementById('rw');rw.style.display='block';
  rw.innerHTML=`
<div class="rhero">
  <div class="rbadge" style="background:${sc.bb};color:${sc.bc};">${r.season_cn} · 专属分析报告</div>
  <div class="rtitle" style="color:${sc.tc};">${r.season_cn}色彩人格</div>
  <div class="rsub">${r.tagline}</div>
  <div class="rstats">
    ${m.h?`<div><div class="rstat-v">${m.h}cm</div><div class="rstat-l">身高</div></div>`:''}
    ${m.w?`<div><div class="rstat-v">${m.w}kg</div><div class="rstat-l">体重</div></div>`:''}
    ${m.bmi?`<div><div class="rstat-v">${m.bmi}</div><div class="rstat-l">BMI</div></div>`:''}
    ${m.age?`<div><div class="rstat-v">${m.age}岁</div><div class="rstat-l">年龄</div></div>`:''}
  </div>
  ${r.skin_insight?`<div style="margin-top:14px;font-size:12px;color:var(--text3);line-height:1.8;">AI观察：${r.skin_insight}</div>`:''}
</div>

<div class="rc">
  <div class="rst">专属色盘</div>
  <div class="pr">${r.palette.map(c=>`<div class="pc"><div class="ps" style="background:${c.hex};"></div><div class="pn">${c.name}<br><span style="font-size:9px;color:var(--text3);">${c.reason}</span></div></div>`).join('')}</div>
  <div class="dv"></div>
  <div class="rst">需要避开的颜色</div>
  <div class="ar">${r.avoid_colors.map(c=>`<div class="ac"><div class="ad" style="background:${c.hex};"></div><div class="at">${c.name}<br><span style="color:var(--text3);font-size:10px;">${c.reason}</span></div></div>`).join('')}</div>
</div>

<div class="rc">
  <div class="rst">体型修饰方案</div>
  ${r.body_analysis?`<div style="font-size:12px;color:var(--text3);margin-bottom:14px;line-height:1.8;">${r.body_analysis}</div>`:''}
  <div class="bg">
    <div class="bc"><div class="bt">凸显优点</div><div class="bv">${r.body_tips.highlight}</div></div>
    <div class="bc"><div class="bt">修饰不足</div><div class="bv">${r.body_tips.modify}</div></div>
    <div class="bc"><div class="bt">比例优化</div><div class="bv">${r.body_tips.proportion}</div></div>
    <div class="bc"><div class="bt">避开版型</div><div class="bv">${r.body_tips.avoid_cut}</div></div>
  </div>
</div>

<div class="rc">
  <div class="rst">场合穿搭公式</div>
  ${r.outfits.map(o=>`<div class="oi"><div class="oo">${o.occasion}</div><div><div class="of">${o.formula}</div><div class="ot">${o.tip}</div></div></div>`).join('')}
</div>

<div class="rc">
  <div class="rst">妆容 & 配饰建议</div>
  <div class="mg">
    <div class="mi"><div class="ml">口红 / 唇色</div><div class="mv">${r.makeup.lipstick}</div></div>
    <div class="mi"><div class="ml">腮红</div><div class="mv">${r.makeup.blush}</div></div>
    <div class="mi"><div class="ml">眼影</div><div class="mv">${r.makeup.eyeshadow}</div></div>
  </div>
  <div class="dv"></div>
  <div style="font-size:11px;color:var(--text3);margin-bottom:6px;letter-spacing:.1em;">首饰 / 配件</div>
  <div style="font-size:13px;color:var(--text);line-height:1.7;">${r.jewelry}</div>
  ${r.style_advice?`<div class="dv"></div><div style="font-size:13px;color:var(--text2);line-height:1.9;font-style:italic;">${r.style_advice}</div>`:''}
</div>

<div class="pdf-cta">
  <div class="pdf-title">下载你的专属 PDF 报告</div>
  <div class="pdf-desc">完全根据你的照片和身材数据个性化生成<br>每一份报告都不一样，只属于你</div>
  <div class="pdf-feats">
    <div class="pdf-feat">完整色彩人格解读</div>
    <div class="pdf-feat">专属色盘 & 避坑色</div>
    <div class="pdf-feat">体型修饰四大方案</div>
    <div class="pdf-feat">三套场合穿搭公式</div>
    <div class="pdf-feat">妆容配饰全建议</div>
  </div>
  <button class="btn-pdf" id="btnPdf" onclick="makePDF()">↓ 立即下载专属 PDF 报告</button>
  <div class="pdf-gen" id="pdfGen"><span class="pr-ring"></span>正在生成专属报告，请稍候...</div>
</div>

<button class="btn-reset" onclick="resetAll()">重新分析</button>`;
  rw.scrollIntoView({behavior:'smooth',block:'start'});
}

async function makePDF(){
  const btn=document.getElementById('btnPdf'),gen=document.getElementById('pdfGen');
  btn.disabled=true;gen.style.display='block';
  try{
    const {jsPDF}=window.jspdf;
    const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
    const W=210,M=18,CW=W-M*2;
    let y=M;
    const r=result,m=meta;
    const sc={spring:[232,168,124],summer:[155,142,196],autumn:[181,130,74],winter:[107,154,184]};
    const col=sc[r.season]||[201,169,110];

    const txt=(t,x,fy,sz,rgb,align='left',mw=CW)=>{
      doc.setFontSize(sz);doc.setTextColor(...rgb);
      const lines=doc.splitTextToSize(String(t||''),mw);
      doc.text(lines,x,fy,{align});
      return fy+lines.length*(sz*0.38)+1.5;
    };
    const box=(x,y,w,h,fill,stroke=null,r2=1.5)=>{
      doc.setFillColor(...fill);
      if(stroke){doc.setDrawColor(...stroke);doc.roundedRect(x,y,w,h,r2,r2,'FD');}
      else doc.roundedRect(x,y,w,h,r2,r2,'F');
    };
    const line=(fy)=>{doc.setDrawColor(50,46,42);doc.setLineWidth(0.3);doc.line(M,fy,W-M,fy);return fy+5;};
    const hex2rgb=(hex)=>{const h=hex.replace('#','');return[parseInt(h.substring(0,2),16),parseInt(h.substring(2,4),16),parseInt(h.substring(4,6),16)];};

    // ── 封面块 ──
    box(0,0,W,62,[14,12,10]);
    // 装饰色点
    [[232,168,124],[155,142,196],[181,130,74],[107,154,184]].forEach((c,i)=>{doc.setFillColor(...c);doc.circle(W-M-2-(i*9),10,2.5,'F');});
    doc.setFontSize(8);doc.setTextColor(106,96,88);doc.text('AI 专属穿搭分析报告',M,13);
    doc.text(new Date().toLocaleDateString('zh-CN'),W-M,13,{align:'right'});
    doc.setFontSize(26);doc.setTextColor(...col);doc.text(r.season_cn,M,38);
    doc.setFontSize(10);doc.setTextColor(180,170,160);doc.text('色彩人格 · 专属穿搭分析',M,48);
    doc.setFontSize(9);doc.setTextColor(120,112,104);
    const tl=doc.splitTextToSize(r.tagline||'',CW);doc.text(tl,M,56);
    y=70;

    // ── 数据栏 ──
    box(M,y,CW,18,[28,24,20]);
    const stats=[[m.h?`${m.h}cm`:'—','身高'],[m.w?`${m.w}kg`:'—','体重'],[m.bmi||'—','BMI'],[m.age?`${m.age}岁`:'—','年龄']];
    stats.forEach(([v,l],i)=>{const sx=M+(CW/4)*i+CW/8;doc.setFontSize(11);doc.setTextColor(230,222,212);doc.text(v,sx,y+8,{align:'center'});doc.setFontSize(7.5);doc.setTextColor(106,96,88);doc.text(l,sx,y+14,{align:'center'});});
    y+=22;
    if(r.skin_insight){doc.setFontSize(8.5);doc.setTextColor(106,96,88);doc.text('AI观察：'+r.skin_insight,M,y);y+=7;}
    y=line(y);

    // ── 专属色盘 ──
    doc.setFontSize(9.5);doc.setTextColor(...col);doc.text('◈  专属色盘',M,y);y+=7;
    const sw=CW/r.palette.length;
    r.palette.forEach((c,i)=>{
      const cx=M+sw*i,cw=sw-3,rgb=hex2rgb(c.hex);
      box(cx,y,cw,12,rgb);
      doc.setFontSize(7.5);doc.setTextColor(80,74,68);
      const nl=doc.splitTextToSize(c.name,cw);doc.text(nl,cx+cw/2,y+16,{align:'center'});
      doc.setFontSize(6.5);doc.setTextColor(130,122,114);doc.text(c.reason,cx+cw/2,y+16+nl.length*3.2,{align:'center'});
    });
    y+=28;

    doc.setFontSize(8.5);doc.setTextColor(130,122,114);doc.text('需要避开：',M,y);y+=5;
    r.avoid_colors.forEach((c,i)=>{const rgb=hex2rgb(c.hex),ax=M+i*62;box(ax,y,7,5,rgb);doc.setFontSize(8);doc.setTextColor(106,96,88);doc.text(`${c.name}  ${c.reason}`,ax+9,y+4);});
    y+=10;y=line(y);

    // ── 体型修饰 ──
    doc.setFontSize(9.5);doc.setTextColor(...col);doc.text('◇  体型修饰方案',M,y);y+=7;
    if(r.body_analysis){doc.setFontSize(8.5);doc.setTextColor(106,96,88);const bl=doc.splitTextToSize(r.body_analysis,CW);doc.text(bl,M,y);y+=bl.length*3.5+3;}
    const tw=(CW-5)/2;
    [['凸显优点',r.body_tips.highlight],['修饰不足',r.body_tips.modify],['比例优化',r.body_tips.proportion],['避开版型',r.body_tips.avoid_cut]].forEach(([lb,cv],i)=>{
      const tx=M+(i%2)*(tw+5),ty=y+Math.floor(i/2)*22;
      box(tx,ty,tw,18,[28,24,20]);
      doc.setFontSize(7.5);doc.setTextColor(...col);doc.text(lb,tx+4,ty+6);
      doc.setFontSize(8.5);doc.setTextColor(200,190,180);
      const lines=doc.splitTextToSize(cv||'',tw-8);doc.text(lines,tx+4,ty+12);
    });
    y+=47;y=line(y);

    // ── 穿搭公式 ──
    doc.setFontSize(9.5);doc.setTextColor(...col);doc.text('▣  场合穿搭公式',M,y);y+=7;
    r.outfits.forEach(o=>{
      box(M,y,CW,17,[24,20,16]);
      doc.setFontSize(8);doc.setTextColor(...col);doc.text(o.occasion,M+3,y+6);
      doc.setFontSize(9);doc.setTextColor(215,205,195);
      const fl=doc.splitTextToSize(o.formula||'',CW-22);doc.text(fl,M+20,y+6);
      doc.setFontSize(7.5);doc.setTextColor(106,96,88);doc.text(o.tip||'',M+20,y+13);
      y+=21;
    });
    y=line(y);

    // ── 妆容配饰 ──
    doc.setFontSize(9.5);doc.setTextColor(...col);doc.text('◉  妆容 & 配饰建议',M,y);y+=7;
    const mw2=(CW-8)/3;
    [['口红/唇色',r.makeup.lipstick],['腮红',r.makeup.blush],['眼影',r.makeup.eyeshadow]].forEach(([lb,v],i)=>{
      const mx=M+i*(mw2+4);box(mx,y,mw2,18,[28,24,20]);
      doc.setFontSize(7.5);doc.setTextColor(106,96,88);doc.text(lb,mx+3,y+6);
      doc.setFontSize(8.5);doc.setTextColor(200,190,180);
      const lines=doc.splitTextToSize(v||'',mw2-6);doc.text(lines,mx+3,y+12);
    });
    y+=22;
    doc.setFontSize(8.5);doc.setTextColor(130,122,114);doc.text('首饰/配件：',M,y);y+=5;
    doc.setFontSize(9);doc.setTextColor(200,190,180);
    const jl=doc.splitTextToSize(r.jewelry||'',CW);doc.text(jl,M,y);y+=jl.length*4+4;

    if(r.style_advice){
      doc.setDrawColor(50,46,42);doc.setLineWidth(0.3);doc.line(M,y,W-M,y);y+=4;
      doc.setFontSize(8.5);doc.setTextColor(150,142,134);
      const al=doc.splitTextToSize(r.style_advice,CW);doc.text(al,M,y);y+=al.length*4+4;
    }

    // ── 页脚 ──
    box(0,288,W,10,[14,12,10]);
    doc.setFontSize(7.5);doc.setTextColor(80,74,68);
    doc.text('AI 专属穿搭分析 · 本报告根据您的个人照片和数据专属生成，每份均不相同',M,294);
    doc.text(r.season_cn+' · '+new Date().toLocaleDateString('zh-CN'),W-M,294,{align:'right'});

    doc.save(`专属穿搭报告_${r.season_cn}_${new Date().toLocaleDateString('zh-CN').replace(/\//g,'-')}.pdf`);
    btn.disabled=false;gen.style.display='none';
    btn.innerHTML='✓ 报告已下载';btn.style.background='#5a9a6a';btn.style.color='#fff';
  }catch(e){
    console.error(e);btn.disabled=false;gen.style.display='none';alert('PDF生成失败，请重试');
  }
}

function resetAll(){
  document.getElementById('formWrap').style.display='block';
  document.getElementById('loading').style.display='none';
  document.getElementById('rw').style.display='none';
  document.getElementById('rw').innerHTML='';
  document.querySelectorAll('.lstep').forEach(s=>s.classList.remove('on'));
  clearPhoto();file=null;result=null;meta=null;
  document.querySelectorAll('.style-tag,.concern-tag').forEach(t=>t.classList.remove('on'));
  ['age','ht','wt'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('bt').value='';document.getElementById('st').value='';
  document.getElementById('bmiW').style.display='none';
  ['s1','s2','s3'].forEach((id,i)=>document.getElementById(id).className=i===0?'si active':'si');
  window.scrollTo({top:0,behavior:'smooth'});
}

function toB64(f){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result.split(',')[1]);r.onerror=()=>rej(new Error('读取失败'));r.readAsDataURL(f);});}
</script>
</body>
</html>
