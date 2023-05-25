import { api } from '../../api';
import { initializeConnect } from 'react-redux/es/components/connect';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    uploadImage: build.mutation({
      query: ({ image }) => {
        const formData = new FormData();
        console.log(image, 'image in api');
        formData.append('image', {
          name: image.path.slice(image.path.lastIndexOf('/')),
          uri: image.path,
          type: image.mime,
        });
        console.log(formData._parts, 'formdata is');
        return {
          url: 'user_images/',
          method: 'PUT',
          body: formData,
        };
      },
    }),
  }),
  overrideExisting: true,
});
export const { useUploadImageMutation } = userApi;
