// const arr = ["apple", "orange", "pineapple", "banana", "grapes"];
 
// var i=0;
// arr1.sort(()=>0.5-Math.random())
// function getrandom() {
// //     const index=Math.floor(Math.random() * arr.length);
// //   const randomValue = arr1[index];
   
//   const randomValue=arr1[i];
// console.log(randomValue);
//   console.log(arr1[i+1]);
//   i++;
//   if(i=arr1.length)
//   document.querySelector(".value").textContent = "het roi";
// document.querySelector(".value").textContent = randomValue;
// }
// function randomNoRepeats(array) {
//     var copy = array.slice(0);
//     return function() {
//       if (copy.length < 1) { copy = array.slice(0); }
//       var index = Math.floor(Math.random() * copy.length);
//       var item = copy[index];
//       copy.splice(index, 1);
//       return item;
//     };
//   }
//   function getrandom(){
//     const a = randomNoRepeats(arr1);
//     document.querySelector(".value").textContent = a;
//   }
var arr = ["Hứng thú", "Bối rối", "Thờ ơ", "Sáng sủa", "Sáng tạo","Sạch sẽ","Nhanh nhẹn","Xương quai xanh","Áo mưa"
,"Báo cáo","Cắm sừng","Mối tình đầu ","Máy ép nhựa","Xe nâng","Màn hình ","Linh kiện ","Kinh doanh","Kỹ thuật",
"Tiêu chuẩn","Hạt nhựa","Thang máy ","Tivi","Lối thoát hiểm","Dán coversheet","Cắt bavia","SIPC","Samsung","Công ty TNHH Chang Dae Vina","Jang Won",
"Chủ tịch","Khuôn","Ép nhựa","Giao hàng","Chân đế","Đánh bóng","Vệ sinh","Không bavia","Phòng họp","Lò vi sóng",
"Lội ngược dòng ","Tăng tốc","Bứt phá","Tương lai","Xuất khẩu ","Mỹ nhân ","Nhà hát ","Ông công ông táo","Rằm tháng giêng",
"Giao thừa","Gà luộc","Rượu vang","Tinh dầu","Tinh hoa","Huy chương vàng","Hình thang","Hình chữ nhật","Xích đu",
"Karaoke","Măng cụt","Xoài cát","Nem nướng","Bún bò Huế","Cơm tấm","Trà đá","Cà phê sữa","Mì tôm","Hột vịt lộn","Tôm hùm",
"Xúc xích","Quả vú sữa","Quả bưởi","Chanh leo","Củ Chi","Con chim cu","Bò cạp","Kẹo cu đơ","Khủng long","Bò sữa","Bươm bướm","Ngựa ô",
"Mèo mun","Giáp Thìn","Quý Mão","Pháo bông","Tết Nguyên Đán","Sổ hồng","Tốc độ","Yên Bái","Bình Định","Sơn La","Hóc Môn",
"Thác Giang Điền","Vườn Xoài","Suối Mơ","Cẩm Mỹ","Long Thành","Ai Cập","Ấn Độ","Mexico","Duyên phận","Sơn Tinh Thủy Tinh",
"Ăn khế trả vàng","Cô bé quảng khăn đỏ","Nàng Bạch Tuyết và Bảy chú lùn","Cây tre trăm đốt","Ăn quả nhớ kẻ trồng cây ","Có chí thì nên ","Cười người hôm trước, hôm sau người cười ",
"Một cây làm chẳng nên non. Ba cây chụm lại nên hòn núi cao ","Lá lành đùm lá rách ","Cưa sừng làm nghé ","Chị ngã em nâng ",
"Ba chìm bảy nổi","Mò kim đáy bể","Đất lành chim đậu","Bút sa gà chết","Ăn cháo đá bát","Bắt cá hai tay","Độc nhất vô nhị","Đầu trâu mặt ngựa",
"Nghiêng nước nghiêng thành","Đàn gảy tai trâu","Thương nhau lắm cắn nhau đau","Đứng núi này trông núi nọ","Một nụ cười bằng mười thang thuốc bổ","Gần mực thì đen, gần đèn thì rạng",
"Cái răng, cái tóc là vóc con người","Cây ngay không sợ chết đứng","Có công mài sắt có ngày nên kim","Có thực mới vực được đạo","Con hơn cha là nhà có phúc","Điếc không sợ súng","Đời cha ăn mặn, đời con khát nước",
"Ếch ngồi đáy giếng","Lửa gần rơm lâu ngày cũng bén","Lời chào cao hơn mâm cỗ","Một con ngựa đau cả tàu bỏ cỏ",
"Nuôi ong tay áo","Nồi nào úp vung nấy","Ở hiền gặp lành","Chuồn chuồn bay thấp thì mưa, bay cao thì nắng, bay vừa thì râm",
"Còn nước còn tát","Gừng càng già càng cay","Gậy ông đập lưng ông","Môi hở răng lạnh","Tiền nào của nấy","Vỏ quýt dày có móng tay nhọn",
"Đi với phật thì mặc áo cà sa, đi với ma thì mặc áo giấy.","Thả con tép bắt con tôm"
]
arr.sort(()=>0.5-Math.random())
const i=0;
const arr1=new Array();
function getrandom() {
  
    //const index=Math.floor(Math.random() * arr.length);
  const randomValue = arr[arr1.length];
arr1.push(randomValue);
// console.log(randomValue);
// console.log(arr);
// console.log(arr1.length);

document.querySelector(".stt").textContent=arr1.length;
  document.querySelector(".value").textContent = randomValue;
 
//   const scorewraper=document.getElementById("scorewraper");
//   for(var i=0;i<arr1.length;i++){
//     const newdiv=document.createElement("div");
//     newdiv.textContent=arr1[i];
//   scorewraper.append(newdiv);
// }
  
}
