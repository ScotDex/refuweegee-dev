export interface FaqItem {
  title: string;
  content?: string;
  items?: FaqItem[];
  withBackground?: boolean;
}

export const faqCategories: FaqItem[] = [
  {
    title: "I need help (recent arrivals and visitors)",
    withBackground: true,
    items: [
      {
        title: "I've just arrived in Glasgow. Can you help me?",
        content:
          "Yes!\n\nWe support people immediately when they have just arrived in Glasgow, and over the many years it can take for a person's asylum claim to be processed. Here are some of the ways we can help:\n\nWelcome Space\nYou can visit our Welcome Centre any time without an appointment. We offer a safe and welcoming place where you can be warm and comfortable for however long you need. We have free snacks, games, books, free wifi, or you can just come for a cup of tea or coffee and a chat.\n\nYou can also speak with a team member or volunteer who can offer advice, speak with you about the ways we can support you at Refuweegee, and make referrals to our partner organisations.\n\nFree shop\nWe have a free shop where you can pick out clothes, shoes, small household items and toys, for free. If you'd like to make an appointment to visit the shop then you can speak with a team member or volunteer in our Welcome Space, or you can send an email to enquiries@refuweegee.co.uk.\n\nLarger household items\nWe love making sure people have the larger household items they need too! If you need furniture or any larger household items then you can let us know by filling out our furniture request form.\n\nEvents\nWe have a conversation club, workshops and social gatherings designed to combat social isolation and improve wellbeing. You can find out more about what's happening on our events page.\n\nWe look forward to welcoming you to our space soon!",
      },
      {
        title: "Where is Refuweegee located?",
        content:
          "Our Welcome Centre is open from 9:30am-4:30pm on Mondays, Tuesdays, Thursdays & Fridays. We are located at 24 George Square, G2 1EG. We share an entrance with Elia Greek Restaurant, so guests should come in through the main entrance, walk straight ahead to the glass doors; then press the buzzer and come to our reception on floor 3.\n\nYou can contact us by sending an email to enquiries@refuweegee.co.uk or you can call us on 0141 401 0756.",
      },
      {
        title: "Is there anything you can't help me with?",
        content:
          "It's important to keep in mind that we won't be able to help with everything. For example:\n\n- We are not caseworkers so we can't help you with your housing, but we can signpost you to other wonderful organisations who can provide this kind of support.\n\n- If you have a shop appointment there is no guarantee that we will have the items you are looking for when you attend. We rely on donations to stock our free shop, so we don't know what we'll receive. We'll always try our best to help you find what you are looking for, but we can never guarantee that we'll have the right item or the right size.\n\nIf we can't give you something you're looking for then we will always try to direct you to somewhere else that may be better able to help.",
      },
      {
        title: "Can you provide mental health support?",
        content:
          "No.\n\nWe offer a safe and welcoming space to find community and escapism. We have games, workshops, conversation classes and social gatherings designed to combat social isolation and improve wellbeing.\n\nHowever our team members and volunteers are not qualified to provide mental health support. If this is something you feel that you need then we can help signpost you to services that specialise in providing this kind of support.",
      },
      {
        title: "Who can access your services?",
        content:
          "Everyone is welcome.\n\nMost of the people we support are forcibly displaced people, but we support members of the established community too. If someone needs our help, we help.",
      },
      {
        title: "What evidence do I need to bring?",
        content:
          "None. We trust you.\n\nWe aim to ask people as few questions as possible and you don't need to bring any paperwork to prove that you need our help. If someone asks for help, we help. Always.",
      },
      {
        title: "Who can access the shop?",
        content:
          "At the moment our free shop is very low on stock so we need to give priority to people with extremely limited access to funds, including:\n\nAsylum seekers, particularly those living in hotels, given they a considerably lower weekly allowance\nAnyone who is street homeless\nFamilies whose children have grown out of their clothes.\n\nPlease note that if you are not in one of these categories but you still need to access the shop, please reach out at enquiries@refuweegee.co.uk to let us know why and we'll do our best to help.\n\nAlternatively you could reach out to our partner organisations Apparel Xchange or Maslow's Community Shop who can provide similar support.",
      },
      {
        title: "How can I book a shop appointment?",
        content:
          "The fastest way to book a shop appointment is to ask one of our partner organisations to make a referral for you. Some of our partner organisations are:\n\nBritish Red Cross\nScottish Refugee Council\nMigrant Help\nGovan Community Project\nGovan Health Centre\nGCC - Glasgow Helps\nAmma Birth Companions\nGovan Home & Education Link Project\nThe Wise Group\nAny NHS health visitor\nHousing Officers\n\nIf you cannot find an organisation to book an appointment for you then you can send an email to enquiries@refuweegee.co.uk and we will help you. Please be aware that we are responding to a large number of emails so it will take longer for you to get an appointment this way.",
      },
      {
        title: "I am unable to travel to the shop. Can you still help me?",
        content:
          "Absolutely. If it is not possible for you to travel to visit the shop then please let us know by emailing enquiries@refuweegee.co.uk and we will try to help.",
      },
      {
        title: "Do you offer childcare?",
        content:
          "No.\n\nOur space includes a playroom where children under the age of five can play while their parents use the shop or other services. Parents must remain in close proximity while their children are in the playroom.",
      },
      {
        title: "I am homeless. Can you help?",
        content:
          "If you are homeless then we would recommend contacting Simons Community or Glasgow City Mission as they specialise in supporting those without accommodation.\n\nYou can also visit our Welcome Centre any time without an appointment if you need somewhere to hang out and spend the day. We offer a safe and welcoming place where you can be warm and comfortable for however long you need. We have free snacks, games, books, free wifi, or you can just come for a cup of tea or coffee and a chat.\n\nYou can also speak with a team member or volunteer who can offer advice and make referrals to our partner organisations, as well as talk with you about the ways we can support you at Refuweegee.\n\nOur Welcome Centre is open from 9:30am-4:30pm on Mondays, Tuesdays, Thursdays & Fridays. We are located at 24 George Square, G2 1EG. We share an entrance with Elia Greek Restaurant, so guests should come in through the main entrance, walk straight ahead to the glass doors; then press the buzzer and come to our reception on floor 3.",
      },
      {
        title: "Where can I get free hot food?",
        content:
          "Social Bite\nMonday to Friday\nMorning 8:30am - 9:30am\nEvening 5:00pm - 6:00pm\n\nGlasgow City Mission\nLunch 1:00pm - 2:00pm\nDinner 6:30pm - 8:00pm\n\nCWIN\nFridays 12:00pm - 1:30pm\n\nCentral Mosque\nSundays 1:00pm - 3:00pm (food parcels only)",
      },
      {
        title: "Can you give me food vouchers?",
        content:
          "No.\n\nWe would recommend reaching out to food banks like The Trussell Trust. The Glasgow Community Food Network have also created a map to help you find local food services such as food banks and community cafes.\n\nIf you are still having difficulty accessing food support then you can always speak to a volunteer or team member in our Welcome Space, or you can send an email to enquiries@refuweegee.co.uk.",
      },
      {
        title: "I need a pram. Can you help?",
        content:
          "Yes, we can absolutely help.\n\nIf you would like us to request a pram then you can let us know by emailing enquiries@refuweegee.co.uk. We will need to know:\n\nyour name\nhome address\nemail address\nphone number\ndue date/age of child\n\nIf we don't have any suitable prams then we will add your name to our waiting list and contact you as soon as one becomes available.",
      },
      {
        title: "Can you provide proof of address letters?",
        content:
          "Yes. If you're living in a hotel then we can provide a proof of address letter. Please speak to a team member or volunteer in our Welcome Space.",
      },
      {
        title: "Can you provide furniture?",
        content:
          "Yes!\n\nIf you would like to make a request for furniture then please fill in our furniture request form to let us know what items you need. We might not always have the items that you need because we rely on donations, but we'll always do our best!\n\nIf you have any difficulty filling out the form then please reach out to enquiries@refuweegee.co.uk.",
      },
      {
        title: "Can you provide a washing machine or fridge for my flat?",
        content:
          "Unfortunately we can't help with white goods like fridges and washing machines. You could consider applying to the Scottish Welfare Fund as this is something they can support people with.\n\nIf you have more questions regarding this then you are welcome to visit us and a team member or volunteer can provide you with more information.",
      },
      {
        title: "Can you provide carpets for my flat?",
        content:
          "Unfortunately we can't help with carpets, but you could try reaching out to Spruce Carpets who may be able to help.",
      },
      {
        title: "Do you offer English classes at Refuweegee?",
        content:
          "We don't offer English classes at Refuweegee, but you can come and visit our Welcome Space and a team member or volunteer will help you to find an English class in your area.",
      },
      {
        title: "Can you give me a phone or a laptop?",
        content:
          "Unfortunately we are unable to help with tech requests at the moment as we have nothing in stock we could give you. But it might be worth reaching out to Scottish Refugee Council, Positive Action In Housing, or Central & West Integration Network to see if they have anything available. You could also try searching this resource to see if there is any digital inclusion support available in your area.",
      },
    ],
  },
  {
    title: "Donations",
    withBackground: true,
    items: [
      {
        title: "Can you pick up donations?",
        content:
          "Yes!\n\nOur furniture team can collect furniture and other bulk donations. If you have large items you'd like us to collect, please fill out our furniture & bulk donations form and our furniture team will get back to you as soon as they can.\n\nPlease keep in mind we are only one van and a small team of strong volunteers! With over 300 people through our doors each day we don't get much admin time to get back to people. Please be understanding of this when you submit the furniture donation form.\n\nIf you're in a rush and can't wait for us to get back to you then we'd recommend Starter Packs Glasgow and Maslows Community Shop.",
      },
      {
        title: "Can I drop off donations at the weekend?",
        content:
          "Our office is closed at the weekend, however we have some lovely pals who have offered to be donation drop-off locations for us. You can find out their weekend opening hours on our donations page.",
      },
      {
        title: "I'd like to do a donations drive for Refuweegee. What items do you need?",
        content:
          "Thank you so much for your interest in collecting donations for us. There are lots of options!\n\nWe're always in need of items for building welcome packs for people arriving in Glasgow. For ideas the best place to look is our Amazon and Common Good wish lists.\n\nAnother great option is long-life milk, sugar and snacks (eg. biscuits, noodles, etc.) We now have over 1000 visitors a week, and our goal is to provide the warmest welcome the people of Glasgow have to offer by providing every visitor with the option of tea & coffee and a sweet or savoury snack. As small as it may sound, a cuppa and a biscuit can make the world of difference to someone visiting our space — and you can only imagine how much milk and biscuits we get through in a day!",
      },
      {
        title: "Do you accept second hand items?",
        content:
          "Yes, we love second hand items as long as they are clean and in good condition! Our golden rule is: if you wouldn't give it to someone you know then don't give it to someone you don't know!\n\nThe only second hand items we can't accept are underwear and socks, which need to be new and still in the original packaging.",
      },
      {
        title: "Can you accept second hand phones and computers?",
        content:
          "Yes!\n\nWe often get requests for phones and laptops and it's lovely to be in a position to help whenever we can. Please be sure to check that phones and laptops are wiped and all passwords are removed so that we can pass them on to people who need them.\n\nWe can accept laptops if they are good enough to be passed on to other people to use for study/browsing, and we can accept a phone as long as it's functional, has good battery life, and the user can access the internet, use WhatsApp and Maps, and make/receive phone calls. Our golden rule is: if you wouldn't give it to someone you know then don't give it to someone you don't know!",
      },
      {
        title: "Can you accept prams and carseats?",
        content:
          "Yes!\n\nWe love passing your old prams and baby items along to families who need them. The only thing we ask is that prams are clean and in full working order as we don't have the wherewithal to make repairs before re-distributing them.",
      },
      {
        title: "Can I donate furniture and larger household items?",
        content:
          "Absolutely!\n\nIf you'd like to make a bulk donation then please fill out our furniture & bulk donations form and our furniture team will get back to you as soon as they can! If you have any difficulty filling out the form then please reach out to enquiries@refuweegee.co.uk.\n\nPlease keep in mind that our furniture team is only one van and a small team of strong volunteers! With over 300 people through our doors each day we don't get much admin time to get back to people. Please be understanding of this when you submit the furniture donation form.\n\nIf you're in a rush and can't wait for us to get back to you then we'd recommend Starter Packs Glasgow and Maslows Community Shop.",
      },
      {
        title: "Can you accept toys?",
        content:
          "Yes!\n\nWe always need toys for children's welcome packs and for our free shop. The only limitation to be mindful of is size: since a lot of our families are living in hotel accommodation with very limited space, it isn't possible for them to take home larger toys. Small and medium sized toys are always appreciated!",
      },
      {
        title: "Monetary donations",
        items: [
          {
            title: "I'd like to organise a fundraising event",
            content:
              "We'd love to hear about your fundraising idea!\n\nThe best person to speak with is Ruth, our fundraising and finance manager. You can reach her at ruth@refuweegee.co.uk.\n\nWe are standing by if you need any help or suggestions. Please keep us in the loop and if you are happy for us to do so, we can put your photos and videos on our social media.\n\nWe hope you have a great time raising money! Every penny you raise will be put to immediate use helping people build new lives in Glasgow.\n\nThank you for being a wonderful human!",
          },
          {
            title: "I'd like to make a donation. Can I include Gift Aid?",
            content:
              "Yes please!\n\nThank you so much for your interest in making a donation to Refuweegee. We can only keep doing what we do because of the continued support and donations from wonderful people like you.\n\nYou can access the Gift Aid declaration form.\n\nIf you have any difficulties then please reach out to Ruth, our fundraising and finance manager, who is on standby to help! You can send her an email at ruth@refuweegee.co.uk.",
          },
        ],
      },
    ],
  },
  {
    title: "The public",
    withBackground: true,
    items: [
      {
        title: "Media",
        items: [
          {
            title:
              "I would like to interview a refugee or asylum seeker. Can you put me in touch with any of your guests or volunteers?",
            content:
              "No.\n\nWe are primarily concerned with protecting the safety and dignity of our guests and volunteers. We would recommend contacting the Voices Network instead, which is a British Red Cross project that provides people with media training so that they can engage safely with the media about their experience as displaced individuals.",
          },
          {
            title: "How can I schedule an interview with you?",
            content:
              "If you'd like to arrange an interview with us then you can let us know by reaching out to enquiries@refuweegee.co.uk and we'll get back to you as soon as we can.",
          },
          {
            title: "Can you make a quick comment?",
            content:
              "We'll help whenever we can but please note that our small team is very stretched providing critical frontline support and it is often difficult for us to turn around requests for comments at short notice. Please feel free to reach out to us at enquiries@refuweegee.co.uk and we'll get back to you as soon as we can.\n\nIf there is a specific question you'd like us to answer then the quickest way for us to answer your question might be by message or voice note. If this would be suitable then please feel free to include your question and a mobile phone number in your email.",
          },
          {
            title:
              "Can we use content from your social media accounts for a piece we're working on?",
            content:
              "Thank you for checking!\n\nPlease always ask our permission before using our words, photos and videos. This is important to help us protect the safety and dignity or our guests and volunteers.\n\nYou can contact us at enquiries@refuweegee.co.uk to let us know if you'd like to use any of our content for your article or production.",
          },
        ],
      },
      {
        title: "Schools",
        items: [
          {
            title: "Can you come and visit our class?",
            content:
              "Thank you for thinking of Refuweegee to support the learning your class are doing! We always love to come and visit schools whenever we can, but since our small team is very stretched providing critical frontline support, we can't always visit in person.\n\nIf you'd like to invite us to visit your school you then please reach out to Clare, our education coordinator. You can contact her at clare@refuweegee.co.uk, and she will get back to you as soon as she can!",
          },
          {
            title: "Can we come and visit Refuweegee?",
            content:
              "Yes!\n\nWe offer different options in relation to our engagement with schools:\n\nVirtual visits. We would arrange a time to meet over Teams when you can speak with Clare, our education coordinator, about the work we do, why it is so important that we provide a warm welcome and kindness to people arriving here in our communities and also answer any questions that the kids may have. We know and understand that right now there are difficult conversations going on in schools, communities and families and people may be really confused about where to look for information. We are happy to have the difficult conversations with young people to help them understand some of the truths behind a lot of the headlines.\n\nVisiting our offices during one of our open days. A little info on our open days:\n\nDay: Friday mornings\nGuests: Groups of up to approximately 50 pupils plus teachers/support staff\nStaff available: up to 5 members of staff/volunteers\nFormat: an introductory talk, followed by a selection of activities (letter-writing, welcome pack building), including office tour. We also ensure there is plenty of time for questions!\n\nIf you have any questions or would like to organise a call or a visit then please reach out to clare@refuweegee.co.uk, and Clare will get back to you as soon as she can!",
          },
          {
            title: "Are there any ways our school can support Refuweegee?",
            content:
              "Thank you for asking!\n\nThere are a few ways to help:\n\nYou could collect items required for our Welcome Packs. You can find a list of Welcome Pack items here.\nYour class could also consider writing welcome letters for displaced people who are arriving in Glasgow and we will put your letters in our welcome packs for new arrivals to read.\n\nAs a school, you may also be looking for ways to show your support for people who are being made to feel unwelcome. One way you could do this is by putting up \"Safe With Me\" posters (which you can download here) to show your pupils and staff that they are wanted and welcome in your school.",
          },
        ],
      },
      {
        title: "I'm a student",
        items: [
          {
            title: "Can I interview someone on your team for my dissertation?",
            content:
              "We'd love to hear about your research and we're always happy to help if we can, but please keep in mind that our small team is very stretched providing critical frontline support and we won't always be able to get involved.\n\nIf you'd like to arrange an interview with our team then please let us know by reaching out to enquiries@refuweegee.co.uk and we will get back to you as soon as we can.",
          },
          {
            title: "Research: Can you help me recruit participants for my study?",
            content:
              "It depends on what is involved.\n\nIf you'd like to tell us about your research and ask for help to recruit participants then please let us know by reaching out to enquiries@refuweegee.co.uk and we'll get back to you as soon as we can.",
          },
          {
            title: "Can I do my student placement with you?",
            content:
              "Thank you for your interest in completing your student placement with us!\n\nPlease feel free to reach out to volunteering@refuweegee.co.uk and we will get back to you as soon as we can.",
          },
        ],
      },
      {
        title: "Volunteering",
        items: [
          {
            title: "I'd like to volunteer",
            content:
              "Thank you for your interest in volunteering with us!\n\nWe couldn't keep Refuweegee going without the help of our wonderful volunteers. Please reach out to us at volunteering@refuweegee.co.uk and we'll get back to you as soon we can.",
          },
          {
            title: "Can corporate groups volunteer with you?",
            content:
              "Yes!\n\nOur corporate volunteering groups are essential part of what we do! If you'd like to speak with us about group volunteering, please reach out to us at volunteering@refuweegee.co.uk and our volunteer coordinator will get back to you as soon as she can.",
          },
        ],
      },
    ],
  },
  {
    title: "Partner organisations",
    withBackground: true,
    items: [
      {
        title: "How can I become a partner organisation?",
        content:
          "If you'd like to be added to our list of partner organisations then please reach out to enquiries@refuweegee.co.uk and we'll get back to you with all the information you need!",
      },
      {
        title: "How can I make a referral to the shop?",
        content:
          "The best way to book a shop appointment for someone is to use partner booking system. If you don't have access to our partner booking system then just contact us at enquiries@refuweegee.co.uk and we'll send you the log in details.\n\nAt the moment our free shop is running very low on stock due to people being unable to reach us with donations because of the roadworks on George Square. So we're needing to give priority to people with extremely limited access to funds, including:\n\nAsylum seekers, particularly those living in hotels, given they a considerably lower weekly allowance\nAnyone who is street homeless\nFamilies whose children have grown out of their clothes.\n\nIf someone you are supporting doesn't isn't in one of these categories but you still feel like they need to visit the shop then please reach out explaining their situation and we'll do our best to help. Alternatively, you can also direct people to our partner organisations Apparel Xchange or Maslow's Community Shop who can provide similar support.",
      },
      {
        title: "I can't see any available appointments on the shop booking system",
        content:
          "New appointments are uploaded to the booking system every [ASK JUANITA HOW OFTEN]\n\nIt's also worth being aware that we have a down week every five weeks when our services pause for essential building maintenance and team training. There are no shop appointments available to book during down weeks.\n\nPlease note that we are always here to help, so if someone's need is urgent and they cannot wait for the shop to re-open after down week then you are welcome to fill out our emergency request form and we will help if we can.",
      },
      {
        title: "When should I make an emergency request?",
        content:
          "In situations where someone's need is urgent (eg. warm layers, shoes, food, toiletries, etc.) and they cannot wait for a shop appointment, or if it is not possible for someone to travel to visit the shop in person, then we would consider this an emergency request. Please fill in our emergency request form and the team will get the needed items out to them as soon as possible.\n\nIf you don't have access to the form then just contact us at enquiries@refuweegee.co.uk and we'll send you the log in details.",
      },
      {
        title: "I'm supporting someone who needs a phone/laptop. Can you help?",
        content:
          "Unfortunately we are unable to help with tech requests at the moment as we have nothing in stock we could give to people. But it might be worth reaching out to Scottish Refugee Council, Positive Action In Housing, or Central & West Integration Network to see if they have anything available.",
      },
      {
        title: "Someone I'm supporting needs a pram. Can you help?",
        content:
          "Yes!\n\nLot's of kind people give us prams and other baby items that are no longer needed and we love finding new homes for them. So far we've re-distributed nearly two thousand prams to families who need them!\n\nIf you'd like to request a pram for someone then just reach out to enquiries@refuweegee.co.uk and let us know:\n\ntheir name\nhome address\nemail address\nphone number\ndue date/age of child.\n\nIf we have nothing suitable in stock then we will add their name to our waiting list and get a pram out to them as soon as we can.",
      },
      {
        title:
          "How can I find out if you have specific items available for someone I'm supporting?",
        content:
          "The fastest way for our team to check if we have a particular item in stock is to fill in our emergency request form.\n\nIf you don't have access to the form then just contact us at enquiries@refuweegee.co.uk and we'll send you the log in details.",
      },
    ],
  },
];
