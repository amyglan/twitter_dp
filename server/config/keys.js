const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "V0h0VlhYMEVpSWNVemVWblRVbGY6MTpjaQ",
    TWITTER_CONSUMER_SECRET: "tlMYJtahSS_dId3ak0jDEwIcKLd8RJC-wEdeHR0iaNfjoUcLPM",
    TWITTER_ACCESS_TOKEN: "OTTttszdzTabAq5RNPFXmO5eV",
    TWITTER_TOKEN_SECRET: "E2miOl4hnIgtiRPr8Ejth9izwweN6QhcFUWq2BvBFEK5UNqHqJ"
  };
  
  const DB_USER = "amyglan";
  const DB_PASSWORD = "shak0922";
  const MONGODB = {
    MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitter.bdkyt.mongodb.net/twitter_dp?retryWrites=true&w=majority`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;