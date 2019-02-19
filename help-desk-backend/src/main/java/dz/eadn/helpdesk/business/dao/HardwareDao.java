package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Hardware;

public interface HardwareDao extends JpaRepository<Hardware, Long> {

}
