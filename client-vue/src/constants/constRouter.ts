export default {
  //=======================INTRO=======================
  INTRO: {
    path: '/intro',
    name: 'intro',
  },
  //=======================REGISTER=======================
  REGISTER_PHONE: {
    path: '/phone',
    name: 'phone',
  },
  REGISTER_PASSWORD: {
    path: '/register/password',
    name: 'register.password',
  },
  REGISTER_OTP: {
    path: '/register/otp',
    name: 'register.otp',
  },
  REGISTER_PASSWORD_SUCCESS: {
    path: '/register/password/success',
    name: 'register.password.success',
  },
  //=======================FORGET PASSWORD=======================
  FORGET_PASSWORD_PHONE: {
    path: '/forget/password/phone',
    name: 'forget.password.phone',
  },
  FORGET_PASSWORD_OTP: {
    path: '/forget/password/otp/:id',
    name: 'forget.password.otp.id',
  },
  NEW_PASSWORD: {
    path: '/forget/password/new/:id',
    name: 'forget.password.new.id',
  },
  NEW_PASSWORD_SUCCESS: {
    path: '/forget/password/success',
    name: 'forget.password.success',
  },
  //=======================LOGIN=======================
  LOGIN: {
    path: '/login',
    name: 'login',
  },

  //=======================DASHBOARD=======================
  DASHBOARD: {
    path: '/dashboard',
    name: 'dashboard',
  },
  DASHBOARD_INFO: {
    path: '/dashboard/info',
    name: 'dashboard.info',
  },

  //=======================CONTRACT=======================
  CONTRACT: {
    path: '/contract',
    name: 'contract',
  },
  CONTRACT_DETAIL: {
    path: '/contract/detail/:id',
    name: 'contract.detail.id',
  },
  CONTRACT_CREATE_REQUEST: {
    path: '/contract/create-request',
    name: 'contract.create-request',
  },
  CONTRACT_REQUEST_SUCCESSFUL: {
    path: '/contract/created-request/:id',
    name: 'contract.created-request.id',
  },
  //=======================PROFILE=======================
  PROFILE: {
    path: '/profile',
    name: 'profile',
  },
  //=======================404=======================
  NOT_FOUND: {
    path: '/404',
    name: '404',
  },
};
