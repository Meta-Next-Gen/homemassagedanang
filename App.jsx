// Home Massage Danang - Landing Page

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "oklch(0.72 0.08 200)",
  "secondaryColor": "oklch(0.78 0.06 210)",
  "accentLight": "oklch(0.85 0.05 205)",
  "spacing": 1.5
}/*EDITMODE-END*/;

const services = [
  {
    title: "Mát-xa cổ truyền",
    desc: "Tinh Hoa Xưa Phổ Cập - Kỹ thuật mát-xa truyền thống giúp thư giãn toàn thân, tăng cường lưu thông máu.",
    color: "oklch(0.72 0.08 200)"
  },
  {
    title: "Đá nóng",
    desc: "Nhiệt ấm sâu - Sử dụng đá nóng tự nhiên giúp giảm căng cơ, thư giãn tinh thần sâu sắc.",
    color: "oklch(0.78 0.06 210)"
  },
  {
    title: "Giác hơi giải cảm",
    desc: "Cân bằng năng lượng - Phương pháp giác hơi giúp giải độc, kích thích lưu thông máu và giảm đau.",
    color: "oklch(0.74 0.07 195)"
  },
  {
    title: "Xoa dịu cơ bắp",
    desc: "Phục hồi năng lượng - Kỹ thuật chuyên sâu giúp giảm đau nhức cơ bắp, phục hồi sau vận động.",
    color: "oklch(0.76 0.05 205)"
  }
];

const faqs = [
  {
    question: "Làm thế nào để đặt lịch mát-xa?",
    answer: "Bạn có thể đặt lịch qua hotline 0900 xxx xxx, qua website, hoặc ứng dụng di động của chúng tôi. Đội ngũ tư vấn sẽ hỗ trợ bạn chọn dịch vụ phù hợp."
  },
  {
    question: "Thợ mát-xa có trình độ chuyên môn?",
    answer: "Tất cả thợ mát-xa của Home Massage Danang đều được đào tạo bài bản, có chứng chỉ hành nghề và nhiều năm kinh nghiệm trong ngành."
  },
  {
    question: "Thời gian mát-xa phù hợp là bao lâu?",
    answer: "Chúng tôi hỗ trợ các gói từ 30 phút đến 120 phút. Gói 60 phút là phổ biến nhất cho lần đầu trải nghiệm."
  },
  {
    question: "Có phục vụ mát-xa tại nhà không?",
    answer: "Vâng, chúng tôi chuyên cung cấp dịch vụ mát-xa tại nhà cho cá nhân và gia đình tại toàn bộ thành phố Đà Nẵng."
  }
];

function App() {
  const [activeFaq, setActiveFaq] = React.useState(0);

  return (
    <div className="min-h-screen bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] font-serif text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] selection:bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)]/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex items-center justify-center text-white font-bold text-lg mr-3">
                HMD
              </div>
              <span className="font-serif text-xl tracking-wide">Home Massage Danang</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">Dịch vụ</a>
              <a href="#about" className="hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">Về chúng tôi</a>
              <a href="#pricing" className="hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">Gói dịch vụ</a>
              <a href="#faq" className="hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">Câu hỏi</a>
            </div>
            <div className="hidden md:block">
              <button className="bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Đặt lịch ngay
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] mb-6 text-sm font-medium">
                  Dịch vụ mát-xa tại nhà uy tín tại Đà Nẵng
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                  Trải nghiệm mát-xa chuyên nghiệp ngay tại <span className="text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">nhà bạn</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Home Massage Danang mang đến dịch vụ mát-xa thư giãn an toàn, lành mạnh với đội ngũ chuyên viên tận tâm, mang lại sự hài lòng tuyệt đối cho bạn và gia đình.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Đặt lịch ngay
                  </button>
                  <button className="border-2 border-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] px-8 py-4 rounded-full font-medium text-lg hover:bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] transition-all duration-300">
                    Xem dịch vụ
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">500+</div>
                  <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">100%</div>
                  <div className="text-sm text-gray-600">Bảo mật thông tin</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">Dịch vụ của chúng tôi</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {services.slice(0, 4).map((service, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] font-medium">
                    Xem tất cả dịch vụ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
              Dịch vụ chuyên nghiệp
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các liệu pháp mát-xa đa dạng được thiết kế riêng nhằm mang đến sự thư giãn tối đa và hiệu quả điều trị chuyên sâu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)]/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: service.color }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-center text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] group-hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.desc}
                </p>
                <div className=" mt-6 textAlign-center">
                  <button className="text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] font-medium hover:text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] rounded-2xl transform -rotate-3 opacity-10"></div>
                <div className="relative bg-white rounded-2xl p-8">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
                    Vì sao chọn Home Massage Danang?
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Đội ngũ thợ mát-xa chuyên nghiệp, có chứng chỉ hành nghề",
                      "Dịch vụ mát-xa tại nhà tiện lợi, tiết kiệm thời gian",
                      "Phòng舱 mát-xa sạch sẽ, đạt tiêu chuẩn vệ sinh",
                      "Giá cả hợp lý, bảng giá công khai minh bạch",
                      "Hỗ trợ 24/7, đặt lịch linh hoạt mọi lúc mọi nơi"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
                Sự an toàn và uy tín là <span className="text-[--ocd-tweak-secondary,oklch(0.78_0.06_210)]">hàng đầu</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Home Massage Danang自成立以来 đã phục vụ hàng trăm khách hàng với sựCam kết về chất lượng dịch vụ và an toàn tuyệt đối. Chúng tôi áp dụng các tiêu chuẩn vệ sinh nghiêm ngặt và đào tạo chuyên sâu cho đội ngũ nhân viên.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mỗi liệu trình mát-xa đều được thiết kế riêng theo nhu cầu của từng khách hàng, đảm bảo mang lại hiệu quả melhores nhất và trải nghiệm thư giãn tuyệt đối.
              </p>
              
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">5</div>
                  <div className="text-sm text-gray-600">Sao đánh giá</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">100%</div>
                  <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
              Gói dịch vụ linh hoạt
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các gói mát-xa được thiết kế phù hợp với nhu cầu và thời gian của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cơ bản", duration: "30 phút", price: "150.000đ", features: ["Mát-xa nhẹ nhàng", "Phục hồi năng lượng", "Tư vấn miễn phí"] },
              { title: "Tiêu chuẩn", duration: "60 phút", price: "250.000đ", features: ["Mát-xa chuyên sâu", "Giảm đau nhức", "Tẩy tế bào chết", "Ưu đãi 5%"], recommended: true },
              { title: "Đa năng", duration: "90 phút", price: "350.000đ", features: ["Toàn bộ liệu pháp", "Giác hơi + massage", "Thư giãn hoàn toàn", "Giảm 10%"], popular: true }
            ].map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${pkg.recommended ? 'bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white shadow-2xl transform scale-105' : 'bg-white border-2 border-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] hover:border-[--ocd-tweak-accent,oklch(0.72_0.08_200)] transition-all duration-300 shadow-lg'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </div>
                )}
                
                <h3 className={`${pkg.recommended ? 'text-white' : 'text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]'} font-serif text-2xl font-bold mb-4`}>{pkg.title}</h3>
                <div className={`${pkg.recommended ? 'text-white/80' : 'text-gray-600'} mb-6`}>{pkg.duration}</div>
                
                <div className="mb-8">
                  <div className={`text-4xl font-bold ${pkg.recommended ? 'text-white' : 'text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]'}`}>
                    {pkg.price}
                  </div>
                  <div className={`${pkg.recommended ? 'text-white/60' : 'text-gray-500'} text-sm`}>/lượt</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${package.recommended ? 'bg-white/20' : 'bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)]/20'}`}>
                        <svg className={`w-3 h-3 ${package.recommended ? 'text-white' : 'text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={package.recommended ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${package.recommended ? 'bg-white text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] hover:bg-gray-100' : 'bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white hover:bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)]'}`}>
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng nâng cao chất lượng dịch vụ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Nguyễn Văn A", location: "Hải Châu, Đà Nẵng", text: "Dịch vụ rất chuyên nghiệp! Thợ mát-xa rất tận tâm và kỹ thuật tốt. Tôi đã đặt nhiều lần và luôn hài lòng." },
              { name: "Trần Thị B", location: "Thanh Khê, Đà Nẵng", text: "Rất tiện lợi khi được mát-xa tại nhà. Không phải đi lại, tiết kiệm thời gian mà hiệu quả thư giãn thì tuyệt vời." },
              { name: "Lê Văn C", location: "Sơn Trà, Đà Nẵng", text: "Giá cả hợp lý, phòng舱 sạch sẽ. Đội ngũ tư vấn rất nhiệt tình và hỗ trợ 24/7. Tôi recommend cho mọi người!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)]/20 flex items-center justify-center font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">
              Câu hỏi thường gặp
            </h2>
            <p className="text-gray-600">
              Những thắc mắc thường gặp về dịch vụ mát-xa của chúng tôi
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="w-full py-6 px-4 text-left flex justify-between items-center focus:outline-none hover:bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)]/50 transition-colors rounded-lg"
                >
                  <span className="font-medium text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-4 pb-6 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Bắt đầu hành trình thư giãn ngay hôm nay
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Đặt lịch mát-xa tại nhà để tận hưởng trải nghiệm thư giãn tuyệt vời cùng Home Massage Danang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1">
              Đặt lịch ngay
            </button>
            <button className="bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[--ocd-tweak-secondary,oklch(0.78_0.06_210)] transition-all duration-300">
              Gọi ngay: 0900 xxx xxx
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex items-center justify-center text-white font-bold text-lg mr-3">
                  HMD
                </div>
                <span className="font-serif text-xl font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">Home Massage Danang</span>
              </div>
              <p className="text-gray-600 mb-6">
                Dịch vụ mát-xa tại nhà chuyên nghiệp tại Đà Nẵng, mang đến sự thư giãn tuyệt đối cho bạn và gia đình.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] hover:bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.587 4.415 3.943 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.764 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] hover:bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.049 0 3.55.012 4.78.07 3.02.138 4.318 1.513 4.458 4.458.058 1.23.069 1.601.069 4.78 0 3.049-.012 3.55-.069 4.78-.14 2.97-1.513 4.318-4.458 4.458-1.23.058-1.601.069-4.78.069-3.049 0-3.55-.012-4.78-.069-2.97-.14-4.318-1.513-4.458-4.458-.058-1.23-.07-1.601-.07-4.78 0-3.049.014-3.55.07-4.78.2-2.97 1.513-4.318 4.458-4.458 1.23-.058 1.601-.069 4.78-.069zm0-2.163c-2.939 0-3.31.013-4.48.068-4.13.19-6.268 2.338-6.458 6.458-.058 1.23-.077 1.601-.077 4.48 0 2.939.013 3.31.068 4.48.19 4.13 2.338 6.268 6.458 6.458 1.23.058 1.601.077 4.48.077 2.939 0 3.31-.013 4.48-.077 4.13-.19 6.268-2.338 6.458-6.458.058-1.23.077-1.601.077-4.48 0-2.939-.013-3.31-.068-4.48-.19-4.13-2.338-6.268-6.458-6.458-1.23-.058-1.601-.077-4.48-.077zm0 5.838c-2.759 0-5 2.241-5 5s2.241 5 5 5 5-2.241 5-5c0-2.759-2.241-5-5-5zm0 8.324c-1.843 0-3.324-1.48-3.324-3.324 0-1.843 1.48-3.324 3.324-3.324s3.324 1.48 3.324 3.324c0 1.843-1.48 3.324-3.324 3.324z" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] hover:bg-[--ocd-tweak-accent-light,oklch(0.85_0.05_205)] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.333c-1.464 0-2.667 1.202-2.667 2.667v21.333c0 1.464 1.202 2.667 2.667 2.667h11.493v-9.294h-3.04v-3.622h3.04v-2.216c0-3.015 1.792-4.668 4.533-4.668 1.312 0 2.687.235 2.687.235v2.953h-1.464c-1.446 0-1.905.901-1.905 1.834v2.486h3.266l-.528 3.622h-2.738v9.294h5.225c1.464 0 2.667-1.202 2.667-2.667v-11.333c0-1.464-1.202-2.667-2.667-2.667z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] mb-6 text-lg">Dịch vụ</h3>
              <ul className="space-y-4">
                {[
                  "Mát-xa cổ truyền",
                  "Đá nóng",
                  "Giác hơi giải cảm",
                  "Xoa dịu cơ bắp",
                  "Mát-xa thư giãn",
                  "Chăm sóc sức khỏe"
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] mb-6 text-lg">Liên hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                  </svg>
                  <span className="text-gray-600">0900 xxx xxx</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">contact@homemassagedanang.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Đà Nẵng, Việt Nam</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-bold text-[--ocd-tweak-accent,oklch(0.72_0.08_200)] mb-6 text-lg">Giờ làm việc</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-600">
                  <span>Thứ 2 - Thứ 6</span>
                  <span>8:00 - 22:00</span>
                </li>
                <li className="flex justify-between items-center text-gray-600">
                  <span>Thứ 7 - Chủ nhật</span>
                  <span>8:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-8">
            <div className="text-center text-gray-600">
              <p className="mb-2">© 2024 Home Massage Danang. All rights reserved.</p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="#" className="hover:text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">Chính sách bảo mật</a>
                <a href="#" className="hover:text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">Điều khoản sử dụng</a>
                <a href="#" className="hover:text-[--ocd-tweak-accent,oklch(0.72_0.08_200)]">Chính sách đổi trả</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Render the app if running in browser
if (typeof ReactDOM !== 'undefined') {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}