module.exports = function (width) {//이 exports는 함수가 되어 객체를 반환하게 되었음
    return {
        area : function(){
            return width * width;
        }
    }; 
    //리턴 - 객체는 중괄호{}, 배열은 대괄호[]
}