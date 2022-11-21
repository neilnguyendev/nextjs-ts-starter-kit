import configs from '@/configs';

export const Helpers = {
  isExceptionUrl: (_url: string): boolean => {
    try {
      let result = false;
      configs.exceptionPath.forEach((path) => {
        const regex = new RegExp(path, 'g');
        if (!result) result = !!_url.match(regex);
      });
      return result;
    } catch (e) {
      return false;
    }
  },
};
