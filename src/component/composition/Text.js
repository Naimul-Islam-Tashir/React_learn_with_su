export default function Text({addEmoji,addBracket}){
let text='i am javaScript Programming Language';
if (addEmoji) {
    text = addEmoji(text, '💜');
}
if (addBracket) {
    text = addBracket(text);
}
return <div>{text}</div>;

}