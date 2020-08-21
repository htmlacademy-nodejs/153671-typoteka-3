'use strict';

const pageContentMain = {
  isAuth: true,
  title: `Типотека`,
  page: `main`,
  categories: [
    {
      name: `Автомобили`,
      count: 88
    },
    {
      name: `Удаленная работа`,
      count: 13
    },
    {
      name: `Бизнес`,
      count: 13
    },
    {
      name: `Путешествия`,
      count: 13
    },
    {
      name: `Дизайн и обустройство`,
      count: 13
    },
    {
      name: `Производство игрушек`,
      count: 22
    },
    {
      name: `UX & UI`,
      count: 22
    }
  ],
  discussedList: [
    {
      text: `Билл Гейтс впервые за два года возглавил рейтинг самых богатых людей мира по версии Bloomberg`,
      hot: 12
    },
    {
      text: `Сервис для аналитики Telegram-чатов Combot попал под блокировку из-за информации на служебной странице`,
      hot: 15
    },
    {
      text: `Модель Кайли Дженнер продаст 51% своей компании Kylie Cosmetics владельцу Factor за $600 млн`,
      hot: 52
    },
    {
      text: `Tesla получила 146 тысяч предзаказов на электрический пикап Cybertruck за двое суток`,
      hot: 153
    }
  ],
  commentList: [
    {
      author: `Анна Артамонова`,
      avatar: `/img/avatar-small-1.png`,
      text: `Сервис аренды жилья Airbnb стал глобальным партнером Международного
        олимпийского комитета
        (МОК) на девять лет, в течение которых пройдет пять Олимпиад, в том числе в Токио в 2020 году.`
    },
    {
      author: `Александр Петров`,
      avatar: `/img/avatar-small-2.png`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор
        разъяснить штрафы за ссылки на
        сайты с матом`
    },
    {
      author: `Игорь Шманский`,
      avatar: `/img/avatar-small-3.png`,
      text: `Что-то все электрокары в последнее время все на одно лицо
        делаются))`
    }
  ],
  postList: [
    {
      breadcrumbs: [`Дизайн`, `Удаленная работа`],
      img: {
        backgrounds: {
          src1: `/img/skyscraper@1x.jpg`,
          src2: `/img/skyscraper@1x.jpg 1x, img/skyscraper@2x.jpg 2x`
        },
        imgText: `Фотография небоскреба`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Я ничего не понял`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    {
      breadcrumbs: [`Фриланс`],
      img: {
        backgrounds: {
          src1: `/img/sea@1x.jpg`,
          src2: `/img/sea@1x.jpg 1x, img/sea@2x.jpg 2x`
        },
        imgText: `Фотография моря`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Путешествие в Голландию`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    {
      breadcrumbs: [`Фриланс`],
      img: {
        backgrounds: {
          src1: `/img/sea@1x.jpg`,
          src2: `/img/sea@1x.jpg 1x, img/sea@2x.jpg 2x`
        },
        imgText: `Фотография моря`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Путешествие в Голландию`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    // {
    //   breadcrumbs: [`Фриланс`],
    //   img: null,
    //   datetime: `21.03.2019, 20:33`,
    //   title: `Путин подписал закон о предустановке российских приложений на
    //     смартфоны и другую
    //     электронику`,
    //   previewText: `Президент России Владимир Путин подписал закон об обязательной предустановке
    //     российского программного
    //     обеспечения на электронную технику, продаваемую в России. Документ опубликован на официальном сайте
    //     правовой информации.`,
    //   commentCount: 12
    // },
    {
      breadcrumbs: [`Дизайн`],
      img: {
        backgrounds: {
          src1: `/img/forest@1x.jpg`,
          src2: `/img/forest@1x.jpg 1x, img/forest@2x.jpg 2x`
        },
        imgText: `Фотография леса`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Я понял, но не все`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    }
  ]
};

const pageContentPost = {
  page: `post`,
  title: `AirPods в один клик`,
  datetime: `21.03.2019, 20:33`,
  headerPost: `Бирюзовое доверие`,
  isAuth: true,
  textArray: [
    `У Apple иногда попадаются интерфейсы, за которые создателей хочется сильно
    поругать
    — к примеру интерфейс
    публикации приложения в AppStore, для которого я уже неделю восстановливаю свой аккаунт разработчика.`,
    `Или интерфейс подключения AirPods на макбуке. Чтобы переключить наушники между
    телефоном и компьютером,
    нужно сначала нажать на значок звука, затем дождаться, когда в списке устройств появятся наушники, потом
    нажать на них и дождаться, пока случится вся магия подключения. Иногда по загадочным причинам магия не
    случается, и операцию нужно повторить, выполняя все те же клики-ожидания-клики — бесит.`
  ],
  img: {
    postImg: `/img/sea-fullsize@1x.jpg`,
    postAlt: `пейзаж море, скалы, пляж`
  },
  categories: [
    {
      name: `Автомобили`,
      count: 88
    },
    {
      name: `Удаленная работа`,
      count: 13
    },
    {
      name: `Бизнес`,
      count: 13
    }
  ],
  comments: [
    {
      commentUser: {
        name: `Евгений Петров`,
        avatar: `/img/avatar-1.png`
      },
      text: `Автор, ты все выдумал, покайся`,
      datetime: `21.03.2019, 20:33`,
    },
    {
      commentUser: {
        name: `Александр Марков`,
        avatar: `/img/avatar-5.png`
      },
      text: `Конечно, прежде чем так писать, нужно
      искренне
      приложить усилия, чтобы разобраться — не все люди умеют выражать свои мысли.`,
      datetime: `21.03.2019, 20:33`,
    },
    {
      commentUser: {
        name: `Евгений Петров`,
        avatar: `/img/avatar-4.png`
      },
      text: `Автор, ты все выдумал, покайся`,
      datetime: `21.03.2019, 20:33`,
    },
    {
      commentUser: {
        name: `Александр Марков`,
        avatar: `/img/avatar-3.png`
      },
      text: `Конечно, прежде чем так писать, нужно
      искренне приложить усилия, чтобы разобраться — не все люди умеют выражать свои мысли.`,
      datetime: `21.03.2019, 20:33`,
    }
  ]
};

const pageContentAllCategories = {
  page: `all-categories`,
  isAuth: true,
  categories: [
    {
      id: 1,
      name: `Жизнь и путешествия`
    },
    {
      id: 2,
      name: `Путешествия`
    },
    {
      id: 3,
      name: `Дизайн и программирование`
    },
    {
      id: 4,
      name: `Другое`
    },
    {
      id: 5,
      name: `Личное`
    }
  ]
};

const pageContentNewPost = {
  page: `new-post`,
  isAuth: true,
  isEdit: false,
  title: `new publication`,
  post: {
    header: ``,
    img: ``,
    datetime: `21.03.2019`,
    categories: [],
    text: ``,
    fullText: ``
  }
};

const pageContentEditPost = {
  page: `new-post`,
  isAuth: true,
  isEdit: true,
  title: `new publication`,
  post: {
    header: `Как правильно заводить машину`,
    img: `moya_mashinka.jpg`,
    datetime: `21.03.2019`,
    categories: [
      {
        name: `Автомобили`
      }
    ],
    text: `Материнский холдинг возглавит гендиректор Google Сундар Пичаи. При этом больше половины голосов в компании останется у Пейджа и Брина.`,
    fullText: `Основатели Google Ларри Пейдж и Сергей Брин отойдут от руководства материнским холдингом Alphabet, сказано в сообщении компании. Пейдж занимал пост гендиректора, а Брин — президента Alphabet. Alphabet возглавит гендиректор Google Сундар Пичаи, он также продолжит руководить Google. Должность президента холдинга будет упразднена.`
  }
};

const pageContentCategory = {
  page: `articles-by-category`,
  isAuth: true,
  title: `Типотека`,
  categories: [
    {
      name: `Автомобили`,
      count: 88
    },
    {
      name: `Удаленная работа`,
      count: 13
    },
    {
      name: `Бизнес`,
      count: 13,
      isActive: true
    },
    {
      name: `Путешествия`,
      count: 13
    },
    {
      name: `Дизайн и обустройство`,
      count: 13
    },
    {
      name: `Производство игрушек`,
      count: 22
    },
    {
      name: `UX & UI`,
      count: 22
    }
  ],
  postList: [
    {
      breadcrumbs: [`Дизайн`],
      img: {
        backgrounds: {
          src1: `/img/skyscraper@1x.jpg`,
          src2: `/img/skyscraper@1x.jpg 1x, img/skyscraper@2x.jpg 2x`
        },
        imgText: `Фотография небоскреба`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Я ничего не понял`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    {
      breadcrumbs: [`Фриланс`],
      img: {
        backgrounds: {
          src1: `/img/sea@1x.jpg`,
          src2: `/img/sea@1x.jpg 1x, img/sea@2x.jpg 2x`
        },
        imgText: `Фотография моря`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Путешествие в Голландию`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    {
      breadcrumbs: [`Фриланс`],
      img: {
        backgrounds: {
          src1: `/img/sea@1x.jpg`,
          src2: `/img/sea@1x.jpg 1x, img/sea@2x.jpg 2x`
        },
        imgText: `Фотография моря`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Путешествие в Голландию`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    },
    {
      breadcrumbs: [`Дизайн`],
      img: {
        backgrounds: {
          src1: `/img/forest@1x.jpg`,
          src2: `/img/forest@1x.jpg 1x, img/forest@2x.jpg 2x`
        },
        imgText: `Фотография леса`
      },
      datetime: `21.03.2019, 20:33`,
      title: `Я понял, но не все`,
      previewText: `Если вы сами пишете такие письма — почитайте Ильяхова.
        А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentCount: 12
    }
  ]
};

const pageContentMy = {
  page: `my`,
  isAuth: true,
  title: `Типотека`,
  postList: [
    {
      datetime: `21.03.2019, 20:33`,
      text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`
    },
    {
      datetime: `21.03.2019, 20:33`,
      text: `Facebook разрешит пользователям копировать фотографии из соцсети в «Google Фото»`
    },
    {
      datetime: `21.03.2019, 20:33`,
      text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`
    },
    {
      datetime: `21.03.2019, 20:33`,
      text: `Facebook разрешит пользователям копировать фотографии из соцсети в «Google Фото»`
    },
    {
      datetime: `21.03.2019, 20:33`,
      text: `Facebook разрешит пользователям копировать фотографии из соцсети в «Google Фото»`
    },
  ]
};

const pageContentMyComments = {
  page: `comments`,
  isAuth: true,
  title: `Типотека`,
  commentList: [
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
    {
      name: `Александр Петров`,
      img: `/img/avatar-small-2.png`,
      datetime: `21.03.2019, 20:33`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.`,
      fullText: `Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени`
    },
  ]
};

const pageContentSearch = {
  page: `search`,
  isAuth: true,
  title: `Типотека`,
  searchWord: `Путешешствия`,
  searchList: [
    {
      datetime: `21.03.2019, 20:33`,
      text: `Huawei открыла в России <b>путешествия</b> на смартфон Mate 30 Pro без сервисов Google`
    },
    {
      datetime: `21.03.2019, 20:33`,
      text: `«Яндекс.Метрика» запустила <b>путешествия</b> сервис для оценки эффективности
      баннеров и видеорекламы в реальном времени`
    }
  ]
};

const pageContentRegister = {
  errorList: [
    // `Пароль не может состоять из двух букв`,
    // `Фамилия не должна быть смешной`
  ],
  errorLogin: {
    errorEmail: false,
    errorPassword: false
  }
};

const pageContentLogin = {
  errorList: [],
  errorLogin: {
    errorEmail: false,
    errorPassword: false
  }
};

module.exports = {
  pageContentMain,
  pageContentPost,
  pageContentAllCategories,
  pageContentNewPost,
  pageContentEditPost,
  pageContentCategory,
  pageContentMy,
  pageContentMyComments,
  pageContentSearch,
  pageContentRegister,
  pageContentLogin
};
