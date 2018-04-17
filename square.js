module.exports = function (width) {//이 exports는 함수가 되어 객체를 반환하게 되었음
    return {//객체 리턴
        // area : function(){
        //     return width * width;
        // },
        // circum : function(){
        //     return width * 4;
        // } 
        width : width,
        area : function(){
            return this.width * this.width;
        },
        circum : function(){
            return this.width * 4;
        }
    }; 
    //리턴 - 객체는 중괄호{}, 배열은 대괄호[]
}