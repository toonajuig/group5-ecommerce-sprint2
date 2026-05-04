export default function DCartCheckoutScreen() {
  return (
    <div className="font-sans box-border m-0 p-0 transition-[box-shadow,transform] duration-150 rounded-[2px] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] overflow-hidden w-360 h-225 bg-white">
      <div className="font-sans box-border m-0 p-0 scrollbar-none w-360 min-h-225 bg-[#F8F6F2] flex flex-col">
        <div className="font-sans box-border m-0 scrollbar-none h-16 bg-white border-b border-[#DDD9D0] flex items-center px-12 gap-0">
          <div className="font-sans box-border m-0 p-0 scrollbar-none flex items-center gap-2 mr-12">
            <div className="font-sans box-border m-0 p-0 scrollbar-none w-8 h-8 rounded-[10px] bg-[#EAF2EA] flex items-center justify-center text-base">
              picture
            </div>
            <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[18px] font-bold text-[#1C1C1A]">
              NOURI
            </span>
          </div>
          <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-8 flex-1">
            <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-normal text-[#8A8780] border-b-2 border-transparent pb-0.5">
              หน้าหลัก
            </span>
            <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-normal text-[#8A8780] border-b-2 border-transparent pb-0.5">
              เมนู
            </span>
            <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-normal text-[#8A8780] border-b-2 border-transparent pb-0.5">
              Meal Plan
            </span>
            <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-normal text-[#8A8780] border-b-2 border-transparent pb-0.5">
              เกี่ยวกับเรา
            </span>
          </div>
          <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-3 items-center">
            <div className="font-sans box-border m-0 scrollbar-none w-50 h-9 bg-[#EDEAE3] rounded-[10px] flex items-center px-3 gap-2">
              <span className="font-sans box-border m-0 p-0 scrollbar-none text-[#8A8780] text-[13px]">
                picture
              </span>
              <span className="box-border m-0 p-0 scrollbar-none font-['Caveat'] text-[13px] text-[#8A8780]">
                ค้นหาเมนู...
              </span>
            </div>
            <div className="font-sans box-border m-0 p-0 scrollbar-none relative">
              <div className="font-sans box-border m-0 p-0 scrollbar-none w-9 h-9 rounded-[10px] bg-[#EDEAE3] flex items-center justify-center text-[18px]">
                picture
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-[7px] bg-[#D95B5B] border-2 border-white flex items-center justify-center">
                <span className="box-border m-0 p-0 scrollbar-none text-white text-[8px] font-['DM_Sans'] font-bold">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans box-border m-0 p-0 scrollbar-none flex-1">
          <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[16px] font-bold text-[#1C1C1A] mb-4">
            ตระกร้าของฉัน (2 รายการ)
          </div>
          <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-[14px] p-4 mb-2.5 flex gap-3.5 border border-[#DDD9D0]">
            <span className="box-border m-0 scrollbar-none font-['Caveat'] text-[13px] text-[#8A8780] text-center px-2">
              picture
            </span>
            <div className="flex-1 scrollbar-none box-border m-0 p-0 font-sans">
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-semibold text-[#1C1C1A]">
                อกไก่ปั่น ข้าวกล้อง
              </div>
              <div className="box-border m-0 p-0 scrollbar-none font-['Caveat'] text-[12px] text-[#8A8780] mb-2.5">
                ไม่เผ็ด
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex items-center justify-between">
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-7.5 h-7.5 rounded-lg border-[1.5px] border-[#DDD9D0] flex items-center justify-center">
                  <span className="font-sans box-border m-0 p-0 scrollbar-none text-[#8A8780]">
                    -
                  </span>
                  <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold">
                    2
                  </span>
                  <div className="font-sans box-border m-0 p-0 scrollbar-none w-7.5 h-7.5 rounded-lg bg-[#5B8C5A] flex items-center justify-center">
                    <span className="font-sans box-border m-0 p-0 scrollbar-none text-white">
                      +
                    </span>
                  </div>
                  <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-5 items-center">
                    <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold text-[#1C1C1A]">
                      "฿" "178"
                    </span>
                    <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] text-[#D95B5B] cursor-pointer">
                      ลบ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-[14px] p-4 mb-2.5 flex gap-3.5 border border-[#DDD9D0]">
            <span className="box-border m-0 scrollbar-none font-['Caveat'] text-[13px] text-[#8A8780] text-center px-2">
              picture
            </span>
            <div className="flex-1 scrollbar-none box-border m-0 p-0 font-sans">
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-semibold text-[#1C1C1A]">
                Green Protein Smoothie
              </div>
              <div className="box-border m-0 p-0 scrollbar-none font-['Caveat'] text-[12px] text-[#8A8780] mb-2.5">
                ไม่มีน้ำตาล
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex items-center justify-between">
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-7.5 h-7.5 rounded-lg border-[1.5px] border-[#DDD9D0] flex items-center justify-center">
                  <span className="font-sans box-border m-0 p-0 scrollbar-none text-[#8A8780]">
                    -
                  </span>
                  <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold">
                    2
                  </span>
                  <div className="font-sans box-border m-0 p-0 scrollbar-none w-7.5 h-7.5 rounded-lg bg-[#5B8C5A] flex items-center justify-center">
                    <span className="font-sans box-border m-0 p-0 scrollbar-none text-white">
                      +
                    </span>
                  </div>
                  <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-5 items-center">
                    <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold text-[#1C1C1A]">
                      "฿" "178"
                    </span>
                    <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] text-[#D95B5B] cursor-pointer">
                      ลบ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-[14px] p-4 border border-[#DDD9D0] mb-2.5">
            <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-semibold text-[#1C1C1A] mb-2.5">
              ที่อยู่จัดส่ง
            </div>
            <div className="bg-[#EDEAE3] rounded-[10px] px-3.5 py-2.5 mb-2 border-[1.5px] border-[#5B8C5A] scrollbar-none box-border m-0 font-sans">
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] font-semibold text-[#1C1C1A]">
                บ้าน-สมชาย ใจดี
              </div>
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] font-semibold text-[#1C1C1A]">
                123/45 ถ.สุขุมวิท กรุงเทพฯ 10110
              </div>
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] text-[#5B8C5A]">
                + เพิ่มที่อยู่ใหม่
              </div>
            </div>
          </div>
          <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-[14px] p-4 border border-[#DDD9D0]">
            <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] font-semibold text-[#1C1C1A] mb-2.5">
              เวลาจัดส่ง
            </div>
            <div className="font-sans box-border m-0 scrollbar-none flex-1 border-[1.5px] border-[#5B8C5A] rounded-[10px] py-2 px-1.5 text-center bg-[#EAF2EA]">
              <span className="text-center box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[10px] text-[#3A6439] whitespace-pre-line leading-[1.4]">
                เร็วที่สุด ~45 นาที
              </span>
              <span className="text-center box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[10px] text-[#3A6439] whitespace-pre-line leading-[1.4]">
                12:00-13:00
              </span>
              <span className="text-center box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[10px] text-[#3A6439] whitespace-pre-line leading-[1.4]">
                13:00-14:00
              </span>
              <span className="text-center box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[10px] text-[#3A6439] whitespace-pre-line leading-[1.4]">
                14:00-15:00
              </span>
            </div>
          </div>
          <div className="font-sans box-border m-0 p-0 scrollbar-none w-90 shrink-0">
            <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-2xl p-5 border border-[#DDD9D0] mb-3">
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold text-[#1C1C1A] mb-3.5">
                สรุปคำสั่งซื้อ
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex justify-between mb-2">
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  ราคาสินค้า
                </span>
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  ฿257
                </span>
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex justify-between mb-2">
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  ค่าจัดส่ง
                </span>
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  ฿30
                </span>
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex justify-between mb-2">
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  ส่วนลด
                </span>
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[13px] text-[#8A8780]">
                  -฿0
                </span>
              </div>
              <div className="font-sans box-border p-0 scrollbar-none h-px bg-[#DDD9D0] my-3"></div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex justify-between mb-4">
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold">
                  รวม
                </span>
                <span className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[14px] font-bold">
                  ฿287
                </span>
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-2 mb-4">
                <div className="font-sans box-border m-0 scrollbar-none flex-1 h-10 bg-[#EDEA E3] rounded-lg flex items-center px-3"></div>
                <div className="box-border m-0 scrollbar-none w-auto h-10 rounded-[12px] flex items-center justify-center font-['DM_Sans'] text-[14px] font-semibold cursor-pointer border-[1.5px] border-solid border-[#5B8C5A] px-4 bg-transparent text-[#5B8C5A]">
                  ใช้
                </div>
              </div>
              <div className="box-border m-0 p-0 scrollbar-none w-full h-12 rounded-[12px] flex items-center justify-center font-['DM_Sans'] text-[14px] font-semibold cursor-pointer border-none bg-[#5B8C5A] text-white">
                ดำเนินการชำระเงิน
              </div>
            </div>
            <div className="font-sans box-border m-0 scrollbar-none bg-white rounded-[14px] py-3.5 px-4 border border-[#DDD9D0]">
              <div className="box-border m-0 p-0 scrollbar-none font-['DM_Sans'] text-[12px] font-semibold text-[#8A8780] mb-2">
                รับชำระผ่าน
              </div>
              <div className="font-sans box-border m-0 p-0 scrollbar-none flex gap-2">
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-11 h-8.5 bg-[#EDEAE3] rounded-[6px] flex items-center justify-center text-[16px]">
                  pay 1
                </div>
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-11 h-8.5 bg-[#EDEAE3] rounded-[6px] flex items-center justify-center text-[16px]">
                  pay 2
                </div>
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-11 h-8.5 bg-[#EDEAE3] rounded-[6px] flex items-center justify-center text-[16px]">
                  pay 3
                </div>
                <div className="font-sans box-border m-0 p-0 scrollbar-none w-11 h-8.5 bg-[#EDEAE3] rounded-[6px] flex items-center justify-center text-[16px]">
                  pay 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
