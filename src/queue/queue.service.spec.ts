import { Test, TestingModule } from '@nestjs/testing';
import { QueueService } from './queue.service';
import { Queue } from 'bullmq';
import { getQueueToken } from '@nestjs/bullmq';

describe('QueueService', () => {
  let service: QueueService;
  let mockQueue: Queue;

  beforeEach(async () => {
    mockQueue = {
      add: jest.fn(),
      getJob: jest.fn(),
      remove: jest.fn(),
      clean: jest.fn(),
      // Adicione outros métodos conforme necessário
    } as unknown as Queue;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QueueService,
        {
          provide: getQueueToken('yourQueueName'),
          useValue: mockQueue,
        },
      ],
    }).compile();

    service = module.get<QueueService>(QueueService);
  });

  it('should create a queue', () => {
    expect(service).toBeDefined();
  });

  it('should add a ticket to the queue', async () => {
    const ticketData = {
      jobId: '1',
      ticketId: '1',
      serviceId: '1',
      userName: 'rafael',
      serviceName: 'programador',
      priority: 1,
    };
    await service.insertJob(ticketData);
    expect(mockQueue.add).toHaveBeenCalledWith('ticket', ticketData, {
      priority: 1,
    });
  });

  it('should edit ticket priority', async () => {
    const ticketId = '1';
    const newPriority = 2;
    await service.updateJobPriority({ ticketId, priority: newPriority });
    // Adicione a lógica para simular a atualização da prioridade
    // e verifique se a fila foi atualizada corretamente
  });

  // it('should call a ticket and send via websocket', async () => {
  //   const ticketId = '1';
  //   await service.callTicket(ticketId);
  //   // Adicione verificação se o websocket foi chamado com a informação correta
  // });

  it('should finalize a ticket', async () => {
    const ticketId = '1';
    await service.finalizeJob(ticketId);
    // Verifique se as alterações foram salvas no banco de dados
  });

  it('should delete a specific queue', async () => {
    await service.remove('yourQueueName');
    expect(mockQueue.clean).toHaveBeenCalled();
  });

  it('should view jobs in a specific queue', async () => {
    await service.findOne('1');
    // Verifique se os jobs foram retornados corretamente
  });

  it('should delete a specific job', async () => {
    const jobId = 'someJobId';
    await service.removeJob(jobId);
    expect(mockQueue.remove).toHaveBeenCalledWith(jobId);
  });

  it('should handle errors gracefully', async () => {
    const ticketData = null; // Exemplo de dados inválidos
    await expect(service.insertJob(ticketData)).rejects.toThrow();
    // Você pode adicionar mais casos de teste para outros métodos
  });
});
