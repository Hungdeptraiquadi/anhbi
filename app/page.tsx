"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Heart, MapPin, Clock, Share2 } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { PhotoGallery } from "@/components/photo-gallery"
import { toast } from "@/components/ui/use-toast"
import { CalendarCountdown } from "@/components/calendar-countdown"

export default function WeddingPage() {
  const [language, setLanguage] = useState<"en" | "vi">("vi")

  const content = {
    en: {
      title: "We're getting married",
      rsvpButton: "RSVP Now",
      ourStory: "Our Love Story",
      proposal:
        "That night on the bridge, with lights reflecting on the Han River, he suddenly stopped amidst the passing crowd. With a serious expression, he knelt down, holding a simple ring he had chosen long ago, his deep voice resonating with a brief but certain proposal. She stood there, heart pounding, unable to believe the moment was real. The sea breeze gently blew through her hair as she looked at him, the man who had been by his side for so long. No tears, just a smile, she nodded. Happiness silently flooded in, from now on they would be each other's forever.",
      journey:
        "For three years together, we've been captivated by our travels, journeys filled with memories. From the bustling Chatuchak market in Bangkok with its colorful stalls and laughter while shopping, to the glittering lights of The Bund in Shanghai at night, where we stood silently watching the Huangpu River. Each trip was a test of our compatibility, from choosing meals to planning itineraries. Though there were arguments due to fatigue, our love remained strong, growing through every street, every experience, binding us closer than ever.",
      weddingDetails: "Wedding Details",
      date: "The Date",
      venue: "Lake Side Hotel",
      address: "23 Ngoc Khanh, Ba Dinh, Hanoi",
      schedule: "Schedule",
      photoGallery: "Photo Gallery",
      rsvp: "RSVP",
      rsvpMessage: "We would be honored to have you join us on our special day. Please RSVP by August 15, 2025.",
      giftRegistry: "Gift Registry",
      giftMessage:
        "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following places.",
      viewRegistry: "View Registry",
      footer: "Made with love",
      shareJoy: "Share Our Joy",
      useHashtag: "Use our wedding hashtag",
      welcomeBride: "9:00 AM - Welcome the Bride",
      weddingReception: "12:30 PM - Wedding Reception",
      giftRegistryInfo: "Gift Information",
      bankAccountInfo: "Bank Account Information:",
      hung: "Hoang Nguyen Hung",
      uyen: "Nguyen Hoang To Uyen",
    },
    vi: {
      title: "Chúng tôi sắp kết hôn",
      rsvpButton: "Xác nhận tham dự",
      ourStory: "Hành trình tình yêu của chúng mình",
      proposal:
        "Đêm ấy trên cầu, ánh đèn phản chiếu lung linh trên sông Hàn, anh bất ngờ dừng lại giữa dòng người qua lại. Với vẻ mặt nghiêm túc, anh quỳ xuống, tay cầm chiếc nhẫn giản dị mà anh đã chọn từ lâu, giọng trầm ấm vang lên lời cầu hôn ngắn gọn nhưng chắc chắn. Em đứng đó, tim đập thình thịch, không tin nổi khoảnh khắc ấy là thật. Gió biển thổi nhẹ qua tóc, em nhìn anh, người đàn ông đã đồng hành bao ngày. Không nước mắt, chỉ có nụ cười, em gật đầu. Hạnh phúc lặng lẽ tràn ngập, từ giờ chúng tôi mãi là của nhau.",
      journey:
        "Ba năm bên nhau, chúng tôi đã mê đắm những chuyến đi, những hành trình đầy ắp kỷ niệm. Từ khu chợ Chatuchak nhộn nhịp ở Bangkok với những gian hàng đầy màu sắc, tiếng cười đùa khi mua sắm, đến Bến Thượng Hải rực rỡ ánh đèn về đêm, nơi chúng tôi đứng lặng ngắm dòng sông Hoàng Phố. Mỗi chuyến đi là một lần thử thách sự hợp gu, từ chọn món ăn đến lên kế hoạch. Dù có lúc cãi vã vì mệt mỏi, tình yêu vẫn bền chặt, lớn dần qua từng con đường, từng trải nghiệm, gắn kết chúng tôi hơn bao giờ hết.",
      weddingDetails: "Chi tiết đám cưới",
      date: "Ngày cưới",
      venue: "Khách sạn Lake Side",
      address: "23 Ngọc Khánh, Ba Đình, Hà Nội",
      schedule: "Lịch trình",
      photoGallery: "Thư viện ảnh",
      rsvp: "Xác nhận tham dự",
      rsvpMessage:
        "Chúng tôi rất vinh hạnh được đón tiếp bạn trong ngày trọng đại này. Vui lòng xác nhận tham dự trước ngày 15 tháng 8 năm 2025.",
      giftRegistry: "Đăng ký quà tặng",
      giftMessage:
        "Sự hiện diện của bạn trong đám cưới của chúng tôi là món quà lớn nhất. Tuy nhiên, nếu bạn muốn tặng chúng tôi một món quà, chúng tôi đã đăng ký tại các nơi sau.",
      viewRegistry: "Xem đăng ký",
      footer: "Được tạo với tình yêu",
      shareJoy: "Chia sẻ niềm vui của chúng tôi",
      useHashtag: "Sử dụng hashtag đám cưới của chúng tôi",
      welcomeBride: "9:00 - Đón Dâu",
      weddingReception: "12:30 - Tiệc Cưới",
      giftRegistryInfo: "Thông tin quà tặng",
      bankAccountInfo: "Thông tin tài khoản ngân hàng:",
      hung: "Hoàng Nguyễn Hưng",
      uyen: "Nguyễn Hoàng Tố Uyên",
    },
  }

  const t = content[language]

  const photos = [
    { src: "/images/gallery-1.jpg", alt: "Couple photo 1" },
    { src: "/images/gallery-2.jpg", alt: "Couple photo 2" },
    { src: "/images/gallery-3.jpg", alt: "Couple photo 3" },
    { src: "/images/gallery-4.jpg", alt: "Couple photo 4" },
    { src: "/images/gallery-5.jpg", alt: "Couple photo 5" },
    { src: "/images/gallery-6.jpg", alt: "Couple photo 6" },
    { src: "/images/gallery-7.jpg", alt: "Couple photo 7" },
    { src: "/images/gallery-8.jpg", alt: "Couple photo 8" },
  ]

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: language === "en" ? "RSVP Submitted" : "Đã gửi xác nhận tham dự",
      description:
        language === "en"
          ? "Thank you for your response. We look forward to celebrating with you!"
          : "Cảm ơn bạn đã phản hồi. Chúng tôi rất mong được chào đón bạn!",
    })
  }

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Lake+Side+Hotel+23+Ngoc+Khanh+Ba+Dinh+Hanoi"

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <LanguageToggle onChange={setLanguage} />

      {/* Hero Section with Elegant Heading */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Wedding background"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-4 md:mb-6 flex justify-center">
            <Heart className="text-rose-200 h-8 w-8 md:h-12 md:w-12" />
          </div>
          <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl text-white mb-3 md:mb-4 tracking-wide">
            Hưng & Uyên
          </h1>
          <div className="w-16 md:w-24 h-1 bg-rose-300 mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-2xl text-rose-100 mb-4 md:mb-8 font-light">{t.title}</p>
          <p className="text-xl md:text-3xl text-white font-serif mb-6 md:mb-8">15.09.2025</p>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-2 md:px-8 md:py-6 text-base md:text-lg">
            {t.rsvpButton}
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
        <CalendarCountdown targetDate="2025-09-15T00:00:00" language={language} />
      </div>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-3 md:mb-4">{t.ourStory}</h2>
            <div className="w-16 md:w-20 h-1 bg-rose-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/our-story-1.jpg"
                  alt="Our story photo 1"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/our-story-2.jpg"
                  alt="Our story photo 2"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 text-gray-700">
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-2 text-rose-600">
                  {language === "en" ? "The Proposal" : "Lời cầu hôn"}
                </h3>
                <p className="text-sm md:text-base">{t.proposal}</p>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-2 text-rose-600">
                  {language === "en" ? "Our Journey" : "Hành trình của chúng mình"}
                </h3>
                <p className="text-sm md:text-base">{t.journey}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-3 md:mb-4">{t.weddingDetails}</h2>
            <div className="w-16 md:w-20 h-1 bg-rose-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-rose-50 p-6 md:p-8 rounded-lg text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <Calendar className="h-8 w-8 md:h-12 md:w-12 text-rose-500" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-800">{t.date}</h3>
              <p className="text-gray-600">15.09.2025</p>
            </div>
            <div className="bg-rose-50 p-6 md:p-8 rounded-lg text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <MapPin className="h-8 w-8 md:h-12 md:w-12 text-rose-500" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-800">{t.venue}</h3>
              <p className="text-gray-600">{t.address}</p>
              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 md:mt-4 text-rose-500 hover:text-rose-600 underline"
              >
                {language === "en" ? "View Map" : "Xem bản đồ"}
              </Link>
            </div>
            <div className="bg-rose-50 p-6 md:p-8 rounded-lg text-center md:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-3 md:mb-4">
                <Clock className="h-8 w-8 md:h-12 md:w-12 text-rose-500" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-800">{t.schedule}</h3>
              <div className="space-y-1 md:space-y-2 text-gray-600">
                <p>{t.welcomeBride}</p>
                <p>{t.weddingReception}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-3 md:mb-4">{t.photoGallery}</h2>
            <div className="w-16 md:w-20 h-1 bg-rose-300 mx-auto"></div>
          </div>
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">{t.shareJoy}</h2>
          <p className="text-lg md:text-xl mb-3 md:mb-4">{t.useHashtag}</p>
          <p className="text-2xl md:text-3xl font-bold text-rose-500 mb-4 md:mb-6">#HưngUyênWedding2025</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button variant="outline" className="rounded-full text-sm md:text-base">
              <Share2 className="mr-2 h-3 w-3 md:h-4 md:w-4" />{" "}
              {language === "en" ? "Share on Facebook" : "Chia sẻ trên Facebook"}
            </Button>
            <Button variant="outline" className="rounded-full text-sm md:text-base">
              <Share2 className="mr-2 h-3 w-3 md:h-4 md:w-4" />{" "}
              {language === "en" ? "Share on Instagram" : "Chia sẻ trên Instagram"}
            </Button>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-3 md:mb-4">{t.rsvp}</h2>
            <div className="w-16 md:w-20 h-1 bg-rose-300 mx-auto mb-3 md:mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{t.rsvpMessage}</p>
          </div>
          <div className="max-w-xl mx-auto bg-rose-50 p-6 md:p-8 rounded-lg">
            <form className="space-y-4 md:space-y-6" onSubmit={handleRSVP}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === "en" ? "Full Name" : "Họ và tên"}
                  </label>
                  <Input id="name" placeholder={language === "en" ? "Your name" : "Tên của bạn"} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === "en" ? "Your email" : "Email của bạn"}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Number of Guests" : "Số lượng khách"}
                </label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  placeholder={language === "en" ? "Number of guests" : "Số lượng khách"}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Message (Optional)" : "Lời nhắn (Không bắt buộc)"}
                </label>
                <Textarea
                  id="message"
                  placeholder={
                    language === "en"
                      ? "Your message or dietary restrictions"
                      : "Lời nhắn hoặc yêu cầu ăn uống đặc biệt của bạn"
                  }
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-2 md:px-8 md:py-6 text-base md:text-lg"
                >
                  {language === "en" ? "Send RSVP" : "Gửi xác nhận"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="py-12 md:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-3 md:mb-4">{t.giftRegistryInfo}</h2>
            <div className="w-16 md:w-20 h-1 bg-rose-300 mx-auto mb-3 md:mb-4"></div>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 text-center text-gray-800">
              {t.bankAccountInfo}
            </h3>
            <div className="space-y-3 md:space-y-4 text-center">
              <div>
                <p className="font-semibold">{t.hung}</p>
                <p>STK: 104866931745</p>
              </div>
              <div>
                <p className="font-semibold">{t.uyen}</p>
                <p>STK: 19034131391016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">Hưng & Uyên</h2>
          <p className="mb-4 md:mb-6">15.09.2025 • Hanoi, VN</p>
          <div className="flex justify-center space-x-4 mb-4 md:mb-6">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-300" />
          </div>
          <p className="text-gray-400 text-xs md:text-sm">
            {t.footer} • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

