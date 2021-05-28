export const getIsLogged = state => state.auth;

export const getAdvertsList = state => state.adverts.data;

export const getAdvertsLoaded = state => state.adverts.loaded;

export const getAdvertsTags = state => state.advertsTags.tags;

export const getTagsLoaded = state => state.advertsTags.loaded;

export const getNewAdvert = state =>  state.createdAdvert.data;

export const getAdvertDetail = (state, AdvertId) => state.adverts.data.find(advert => advert.id ===  AdvertId);



export const getUI = state => state.ui;