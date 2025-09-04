from abc import ABC, abstractmethod

class IAnimalsRepository:
    @abstractmethod
    def obter_animais_por_id(self, animal_id: int):
        pass