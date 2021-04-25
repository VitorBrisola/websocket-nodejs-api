import { response, Router } from 'express';
import { getCustomRepository } from 'typeorm';

import SettingsRepository from './repositories/SettingsRepository';


const routes = Router();

routes.post('/settings', async (request, response) => {
  const { chat, userName } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
      chat,
      userName
  });

  await settingsRepository.save(settings);

  return response.json(settings);
})

export default routes;
