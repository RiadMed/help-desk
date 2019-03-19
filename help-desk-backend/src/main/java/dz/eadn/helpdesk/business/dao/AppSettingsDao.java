package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.AppSettings;

public interface AppSettingsDao extends JpaRepository<AppSettings, Integer> {

}
