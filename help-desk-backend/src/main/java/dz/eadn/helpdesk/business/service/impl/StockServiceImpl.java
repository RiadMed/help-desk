package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.StockDao;
import dz.eadn.helpdesk.business.data.dto.StockDto;
import dz.eadn.helpdesk.business.data.entities.Stock;
import dz.eadn.helpdesk.business.service.StockService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class StockServiceImpl extends GenericServiceImpl<StockDao, Stock,StockDto, Long> implements StockService {

	private static final long serialVersionUID = 1L;

}
