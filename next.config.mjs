const apiOrigin = process.env.NODE_ENV === 'development' && process.env.BAZI_LOCAL_API === '1'
  ? 'http://127.0.0.1:54321'
  : 'https://ppolzafvjidfwfzcjskv.supabase.co/functions/v1';

export default {
  async rewrites() {
    return ['places','bazi'].map(name => ({source:`/api/${name}`,destination:`${apiOrigin}/${name}`}));
  },
};
