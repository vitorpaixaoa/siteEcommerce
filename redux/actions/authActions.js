import { AUTENTICAR_TOKEN } from '../types';

export const reauthenticate = token => ({ type: AUTENTICAR_TOKEN, payload: token});

export default {
    reauthenticate
};