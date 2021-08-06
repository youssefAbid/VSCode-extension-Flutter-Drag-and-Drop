<script>
    import LeftSideBar from './lefSideBar.svelte'
    import RightSideBar from './RightSideBar.svelte'
    import Anchor from './Anchor.svelte'
    let buttons = [];


    let widgets = [];


    let idSelectIem ;
    let bgColor
    let textColor;

    let typeName;
	  let text;
	  export let positionX;
	  export let positionY;
	  let width;
	  let height;


    let selectIem = false;
    let colorSelectIem;
    let textColorSelectIem;


  const handleAdd = (e) => {
    const button = e.detail;
    buttons = [button, ...buttons];
    console.log(buttons);
  };

  const handleColor =(e) => {
    bgColor = e.detail;
    console.log("i am " + bgColor + " background");
  };

  const handelTextColor = (e) => {
  textColor = e.detail;
  console.log("i am " + textColor + " text Color");
 };

 const handelText = (e) => {
  text = e.detail;
  console.log("my text is " + text);
 };

 const handelTypeName = (e) => {
  typeName = e.detail;
  console.log("i am a " + typeName);
 };

 const handelPositionY = (e) => {
  positionY = e.detail;
  console.log("my position Y : " + positionY);
 };

 const handelPositionX = (e) => {
  positionX = e.detail;
  console.log("my position X : " + positionX);
 };

 const handelWidth = (e) => {
  width = e.detail;
  console.log("my width is : " + width)
 };

 const handelHeight = (e) => {
  height = e.detail;
  console.log("my height is : " + height)
 };
  const handleId=(e) => {
    idSelectIem = e.detail;
    console.log("i am " + idSelectIem);
    
    console.log(idSelectIem);
    let copiedButtons = [...buttons];
    let upupdatebutton = copiedButtons.find((button) => button.id == idSelectIem);

    if(bgColor == null){
      bgColor = upupdatebutton.color;
      textColor = upupdatebutton.textColor;
      positionY = upupdatebutton.positionY;
      positionX = upupdatebutton.positionX;
      width = upupdatebutton.width;
      height = upupdatebutton.height;
      typeName = upupdatebutton.typeName;
      text = upupdatebutton.text;
    }else{
      upupdatebutton.color = bgColor;
      upupdatebutton.textColor = textColor;
      upupdatebutton.positionY = positionY;
      upupdatebutton.positionX = positionX;
      upupdatebutton.width = width;
      upupdatebutton.height = height;
      upupdatebutton.typeName =typeName;
      upupdatebutton.text = text;
      buttons=copiedButtons;
    }
  };
 const handeUpDate =(e)=>{
    const {id,isSelectedItem,left,top} = e.detail;
    selectIem = isSelectedItem ;
    idSelectIem = id ;
    console.log(idSelectIem);
    let copiedButtons = [...buttons];
    let upupdatebutton = copiedButtons.find((button) => button.id == idSelectIem);
    bgColor = upupdatebutton.color;
    textColor = upupdatebutton.textColor;
    positionY = left;
    positionX = top;
    width = upupdatebutton.width;
    height = upupdatebutton.height;
    typeName = upupdatebutton.typeName;
    text = upupdatebutton.text;
    console.log("left:"+left+"\n"+"top:"+top);
 };

 const handleTest = (e) => {
    const ll = [e.detail,...widgets];
    console.log("tree widget : " );
    ll.forEach(x =>  {
      console.log(x);
    });
    
 };

</script> 
<RightSideBar on:color={handleColor}
on:id={handleId}
on:textcolor={handelTextColor}
on:typeName={handelTypeName}
on:text={handelText}
on:positionY={handelPositionY}
on:positionX={handelPositionX}
on:width={handelWidth}
on:height={handelHeight}
{textColor}
{bgColor}
{typeName}
{positionX}
{positionY}
{width}
{height}
{text}
{buttons}
{idSelectIem}></RightSideBar>
<LeftSideBar on:add={handleAdd} on:test={handleTest}></LeftSideBar>
<Anchor {buttons} on:itemUpDate={handeUpDate}  ></Anchor>


