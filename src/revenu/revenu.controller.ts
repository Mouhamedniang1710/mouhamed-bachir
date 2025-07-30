import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';

@Controller('revenu')
export class RevenuController {
  constructor(private readonly revenuService: RevenuService) {}

  @Post()
  create(@Body() createRevenuDto: CreateRevenuDto) {
    return this.revenuService.create(createRevenuDto);
  }

  @Get()
  findAll() {
    return this.revenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenuDto: UpdateRevenuDto) {
    return this.revenuService.update(+id, updateRevenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenuService.remove(+id);
  }
}
